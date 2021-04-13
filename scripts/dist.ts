const copyfiles = require('copyfiles');
const rimraf = require('rimraf');
const fs = require('fs')

let distDir = './target/dist/';
let outDir = distDir + 'models';

let items: string[] = [
    './target/generated-sources/sdk/dist/models/*',
    outDir
];

rimraf(distDir, fs, function (err: any) {
    if(err) {
        console.log('dist directory removal response: ' + err);
        return;
    }

    let config = {
        all: true,
        verbose: true,
        up: -1
    }

    copyfiles(items, config, function (err: any) {
        if(err) {
            console.log('copy file response: ' + err);
        }

        console.log("Files copied successfully!");
    });
});
