"use strict";
exports.__esModule = true;
var json_refs_1 = require("json-refs");
var fs = require('fs');
var yaml = require('js-yaml');
/**
 * Return JSON with resolved references
 * @param {array | object} root - The structure to find JSON References within (Swagger spec)
 * @returns {Promise.<JSON>}
 * @author @srmalley-sphereon
 */
var multiFileSwagger = function (root) {
    var options = {
        filter: ["relative", "remote"],
        loaderOptions: {
            processContent: function (res, callback) {
                callback(null, yaml.parse(res.text));
            }
        }
    };
    return json_refs_1.resolveRefs(root, options).then(function (results) {
        return results.resolved;
    }, function (err) {
        console.log(err.stack);
    });
};
var file = 'resources/swagger/pe-api-0.0.0.yaml';
var specs = yaml.load(fs.readFileSync(file, 'UTF-8'));
multiFileSwagger(specs)
    .then(function (result) {
    console.log(result);
});
