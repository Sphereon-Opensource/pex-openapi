<h1 align="center">
  <br>
  <a href="https://www.sphereon.com"><img src="https://sphereon.com/content/themes/sphereon/assets/img/logo.svg" alt="Sphereon" width="400"></a>
  <br> Decentralized Identity Foundation 
  <br> Presentation Exchange 
  <br> OpenAPI
  <br>
</h1>

## Table of Contents

- [Security](#security)
- [Background](#background)
- [Install](#install)
- [Usage](#usage)

## Security

As with most security- and cryptography-related tools, the overall security of your system will largely depend on your design decisions (which key types you will use, where you'll store the private keys, what you put into your credentials, and so on.)

## Background

This is an interpretation of the
[Presentation Exchange v1.0.0](https://identity.foundation/presentation-exchange/#submission-requirements)
specification as OpenAPIs (YAMLs). 

It allows you to generate objects consistently while remaining compliant and consistent with the DIF specification.

## Install

This is a maven-based-project. To install locally (for development)

```
git clone git@github.com:Sphereon-Opensource/pe-api.git
cd pe-api
```

## Usage

### Step 0 : Check GIT branch. 

If confronted with errors in the following steps then please check if you have a right branch checkout.

```
git checkout <branch-name>
```

### Step 1 : Generate models
The following command will generate the models in `<project-root>/sdks/models`
```
mvn install -P typescript-models-only
```


### Step 2 : Package the models for publishing.

```
cd sdks/models
npm pack
```

Expected result is that a file `sdks/models/pe-models-M.m.p.tgz` is generated where `M.m.p` is arbitrary.

### Step 3 : Create Project to use generated models

The models generated can be used in your project. This is an example where you create a new `NPM` project and import `JwtObject`. Similarly, you can import and use other objects. 

```
mkdir my-pe-models-consumer-prj
cd my-pe-models-consumer-prj
npm init
```

`npm init` asks few questions the default answer to those questions can be selected.

### Step 4 : Import models

To use the models generated as a result of above in `step 1`
```
npm install
npm install --save '<base>\pe-api\sdks\models\pe-models-0.0.1.tgz'
npm instal --save ts-node
```

create a folder named `scripts` and a file in it named `consumer-script.ts` with following contents

```
import {JwtObject} from 'pe-models'

var jwtObject : JwtObject = {
    alg : ['someAlgorithm']
};

console.log(jwtObject);
```

In `package.json` add a script `"my-pe-models-consumer-script": "ts-node scripts/consumer-script.ts"` in scripts section. Resulting Package.json may look like following.

```
{
  "name": "my-pe-models-consumer-prj",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "my-pe-models-consumer-script": "ts-node scripts/consumer-script.ts"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "pe-models": "file:../../pe-api/sdks/models/pe-models-0.0.1.tgz",
    "ts-node": "^9.1.1"
  }
}

```

In terminal run following command from the `<base>/my-pe-models-consumer-prj` 

```
npm run my-pe-models-consumer-script
```

You should expect this to be printed on console.
```
{ alg: [ 'someAlgorithm' ] }
```
## Releasing
