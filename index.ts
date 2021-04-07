import express from 'express'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs';
import * as bodyParser from 'body-parser'
import {resolveRefs} from 'json-refs';

/**
 * Return JSON with resolved references
 * @param {array | object} root - The structure to find JSON References within (Swagger spec)
 * @returns {Promise.<JSON>}
 */
const multiFileSwagger = (root: object) => {
    const options = {
        filter: ["relative", "remote"],
        loaderOptions: {
            processContent: function (res: any, callback: any) {
                callback(null, YAML.parse(res.text));
            },
        },
    };

    return resolveRefs(root, options).then(
        function (results) {
            return results.resolved;
        },
        function (err) {
            console.log(err.stack);
        }
    );
};

class App {
    private httpServer: any

    constructor(swaggerDocument: any) {
        this.httpServer = express()
        this.httpServer.use(bodyParser.urlencoded({extended: true}));
        this.httpServer.use(bodyParser.json());
        this.httpServer.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }

    public Start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.httpServer.listen(
                port,
                () => {
                    resolve(port)
                })
                .on('error', (err: object) => reject(err));
        })
    }
}

const port = parseInt(process.env.PORT || '3000')
multiFileSwagger(YAML.load('./resources/swagger/pe-api-0.0.0.yaml'))
    .then(result => {
        new App(result).Start(port)
            .then(port => console.log(`Server running on port ${port}`))
            .catch(error => {
                console.log(error)
                process.exit(1);
            });
    });
