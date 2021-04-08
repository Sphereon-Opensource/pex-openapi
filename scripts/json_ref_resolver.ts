import YAML from 'yamljs';
import {resolveRefs} from 'json-refs';
import fs from 'fs';

const prettier = require('json-to-pretty-yaml');

const multiFileSwagger = (root: object) => {
    const options = {
        filter: ["relative", "remote"],
        loaderOptions: {
            processContent: (res: any, callback: any) => {
                callback(null, YAML.parse(res.text));
            },
        },
    };

    return resolveRefs(root, options).then(
        results => results.resolved,
        err => {
            console.log(err.stack);
        }
    );
};

multiFileSwagger(YAML.load('./resources/swagger/pe-api-0.0.0.yaml'))
    .then(result => {
        var targetDir = './target/generated-sources/';

        if (!fs.existsSync(targetDir)){
            fs.mkdirSync(targetDir, { recursive: true });
        }

        const combinedFilePath = targetDir + 'pe-api-combined-0.0.0.yaml';
        const prettifiedContent = prettier.stringify(result);
        fs.writeFile(combinedFilePath, prettifiedContent, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log(combinedFilePath + 'file created!')
        });
    });
