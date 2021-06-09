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
- [Setup](#Setup)
- [Usage](#usage)

## Background

The Presentation Exchange OpenAPI is an interpretation of the
[DIF Presentation Exchange v1.0.0](https://identity.foundation/presentation-exchange/#submission-requirements)
specification. 

A standardised presentation exchange is crucial for interoperability between different systems that are used by verifiers and holders (e.g. wallets). It enables verifier- and holder-systems to interpret models used by each other in a consistent way. The PE-OpenAPI specification and Models Generator will allow for usecases with the need to implement a Presentation Exchange, possibly using different programming languages.

### PE-OpenAPI specification
The PE-OpenAPI specification is a set of OpenAPI 3 specification YAML files. It can be used by 3rd parties to generate the models and SDKs for their own desired framework and programming language. The specification is used to create the Typescript models as described below.

The PE-OpenAPI specification is used to generate the models and SDKs for Sphereon's [PE-JS library](https://github.com/Sphereon-Opensource/pe-js/)

### PE-OpenAPI Models Generator (Coming soon)
The PE-OpenAPI Models Generator is a pre-configured component to generate the models from the above PE-OpenAPI v3 Specification YAML files. Developers who intend to integrate the DIF PE specification in their typescript/javascript systems can either extend this project, or follow the [guide](Coming soon) to make it part of their code-bases.

### PE-Models library (Coming soon)
The PE-models library is a pre-published ready to use typescript node-module that can be directly downloaded and installed from npmjs.com. This can be used in any javascript based project to have a consistent structure of the models required in presentation exchange between verifier and holders of verifiable credentials.
The PE-Models library will also be used in the libraries desiring to validate and verify presentation definitions and submissions.

## Security

As with most security- and cryptography-related tools, the overall security of your system will largely depend on your design decisions eg. which key types you will use, where you'll store the private keys, what you put into your credentials, and so on.

## Setup

This is a maven-based-project. To setup locally for development run following commands.

```
cd '<workspace>'
git clone git@github.com:Sphereon-Opensource/pe-openapi.git
cd pe-openapi
```

## Usage

### Step 0 : Check GIT branch.

`git branch` will list all the branches in local machine and also highlight the checked-out branch. Please check if you are on the right branch. Steps you are following should be from the same branch (e.g. in browser) as in your `cloned` git repo. 

A most common indicator of being on wrong branch may be that you encounter problems following steps.

```
git branch
```

To switch the branch.

```
git checkout <branch-name>
```

### Step 1 : Generate models

The following command will generate the models in `<workspace>/pe-openapi/target/sdks/models/typescript`
```
mvn install -P models-typescript
```

### Step 2 : Package the models for publishing.

```
cd target/sdks/models/typescript
npm pack
```

Expected result is that a file `/target/sdks/models/typescript/sphereon-pe-models-M.m.p.tgz` is generated where `M.m.p` is arbitrary.

### Step 3 : Create Project to use generated models

The models generated can be used in your project. This is an example where you create a new `NPM` project to use `typescript` language, import and use `JwtObject`. Similarly, you can import and use other objects. 

```
cd '<workspace>'
mkdir my-pe-models-consumer-prj
cd my-pe-models-consumer-prj
npm init
```

`npm init` asks few questions. The default answer to those questions can be selected.

### Step 4 : Add script & Import models

To use the models generated as a result of above in `step 1`

```
npm install
npm install --save '<workspace>/pe-openapi/target/sdks/models/typescript/sphereon-pe-models-0.0.2.tgz'
npm install --save ts-node
```

Create a folder named `scripts`

```
mkdir scripts
```

Create a file in 'scripts' named `consumer-script.ts` with following contents

```
import {JwtObject} from '@sphereon/pe-models'

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
    "@sphereon/pe-models": "file:../pe-openapi/target/sdks/models/typescript/sphereon-pe-models-0.0.2.tgz",
    "ts-node": "^9.1.1"
  }
}
```

### Step 5 : Check how it went

In terminal run following command from the `<workspace>/my-pe-models-consumer-prj` 

```
cd '<workspace>/my-pe-models-consumer-prj'
npm run my-pe-models-consumer-script
```

You should expect this to be printed on the console.

```
{ alg: [ 'someAlgorithm' ] }
```

## Releasing

#### Step A : Update values

Update 
- this README.md 
- SDK's README.md located at `template/models-typescript/README.md`
- release-notes.md

Bump up the version of SDK in `pom.xml`

```
<npmVersion>M.m.p</npmVersion>
```

And in package.json `template/models-typescript/package.json`.

```
"version": "M.n.p",
```

Since `package.json` file is being copied from `template` directory instead of being created. The POM's version is not effective for now. Keeping it aligned may still be beneficial though.

#### Step B : Recreate the SDK

```
mvn clean
mvn install -P models-typescript
cd target/sdks/models/typescript
npm pack
```

#### Step C : Publish

```
npm login
```

`npm login` may need to ask multiple questions.

```
npm publish sphereon-pe-models-M.m.p.tgz --access public
```

```
npm logout
```

#### Step D : Check 

Check on `npmjs.com`

And by installing the module as per this `README.md`. 
