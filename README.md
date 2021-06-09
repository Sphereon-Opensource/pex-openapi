<h1 align="center">
  <br>
  <a href="https://www.sphereon.com"><img src="https://sphereon.com/content/themes/sphereon/assets/img/logo.svg" alt="Sphereon" width="400"></a>
  <br> Decentralized Identity Foundation 
  <br> Presentation Exchange 
  <br> OpenAPI
  <br>
</h1>

## Table of Contents

- [Background](#background)
- [Security](#security)
- [Setup](#Setup)
- [Usage](#usage)

## Background

The Presentation Exchange OpenAPI is an interpretation of the
[DIF Presentation Exchange v1.0.0](https://identity.foundation/presentation-exchange/#submission-requirements)
specification as OpenAPIs (YAMLs), providing an implementation agnostic, 
and stateful interaction mediation between holders and verifiers. 

A standardised presentation exchange is crucial for interoperability between different systems that are used by verifiers and holders (e.g. wallets). It enables verifier- and holder-systems to interpret models used by each other in a consistent way. The PE-OpenAPI specification and Models Generator will allow for usecases with the need to implement a Presentation Exchange, possibly using different programming languages. 

The API can be used without having to implement any of the DIF PE logic. It allows generation of objects, remaining compliant and consistent with the DIF specification. Users can submit presentation(s) with certainty of acceptance, since the DIF PE logic ensures the information submitted in the response is compatible with the request model of the verifier.


### PE-OpenAPI specification
The PE-OpenAPI specification is a collection of OpenAPI 3 specification YAML files. It can be used by third parties to generate the models and SDKs for their own desired framework and programming language. The specification is used to create the Typescript models as described below.

The PE-OpenAPI specification is used to generate the models and SDKs for Sphereon's [PE-JS library](https://github.com/Sphereon-Opensource/pe-js/)

### PE-OpenAPI Models Generator (Coming soon)
The PE-OpenAPI Models Generator is a pre-configured component for generating the models from the PE-OpenAPI specification YAML files. Developers who intend to integrate the DIF PE specification in their TypeScript/JavaScript project can either extend this project, or follow the [guide](Coming soon) to make it part of their code-bases.

### PE-Models library (Coming soon)
The PE-Models library is a pre-published, and ready to use typescript node-module that can be directly downloaded and installed from [npmjs pe-models](https://www.npmjs.com/package/@sphereon/pe-models). This library can be used in any JavaScript project, providing a consistent structure of the models required in presentation exchange between verifier and holders of verifiable credentials.

Aditionally the PE-Models library can be used to create libraries for verification of presentation defifiniton and submission objects themselves. In this fashon, the PE-Models library is used in Sphereon's [PE-JS library](https://github.com/Sphereon-Opensource/pe-js/) to validate the model objects.

On each progressive interaction with the PE REST API, the backend will be updated, keeping track of the status of the overall exchange. The involved parties can be notified of the status changes using the provided endpoint. The parties can also enquire the status by calling the 'status check' API endpoint, eliminating the need to develop and deploy a callback listening endpoint.  

The fact that the PE REST API is agnostic to the callers' implementation, allows the verifier and holders to be interchangeable and have different systems. A stateful, reliable and compliant DIF Presentation Exchange can be created by just using a 'create session' call. 

The rest API supports the following actions:
- Create [Presentation Definitions](https://identity.foundation/presentation-exchange/#presentation-definition)
- Define [Input Descriptors](https://identity.foundation/presentation-exchange/#input-descriptor)
- Define [Submission Requirements](https://identity.foundation/presentation-exchange/#submission-requirements)
- Do [Input Evaluation](https://identity.foundation/presentation-exchange/#input-evaluation)
- Create [Presentation Requests](https://identity.foundation/presentation-exchange/#presentation-request)
- Create [Presentation Submission](https://identity.foundation/presentation-exchange/#presentation-submission)
- Check status of the presentation exchange

For more details on the specific actions that are available, see the Sphereon's Presentation Exchange REST API Interface specification


## Security

As with most security- and cryptography-related tools, the overall security of your system will largely depend on your design decisions which key types you will use, where you'll store the private keys, what you put into your credentials, and so on.

## Setup

This is a maven-based-project. To setup locally for development, run following commands.

```
cd '<workspace>'
git clone git@github.com:Sphereon-Opensource/pe-openapi.git
cd pe-openapi
```

## Usage

### Step 0 : Check GIT branch.

Please check if you are on the right branch. The steps you are following should be from the same branch (e.g. in browser) as in your `cloned` git repo. 

To list all the branches in local machine and also highlight the checked-out branch use the following command. 
```
git branch
```

To switch the branch use the following command. 
```
git checkout <branch-name>
```

### Step 1 : Generate models

The following command will generate the models in `<workspace>/pe-openapi/target/sdks/models/typescript`.
```
mvn install -P models-typescript
```

### Step 2 : Package the models for publishing.

```
cd target/sdks/models/typescript
npm pack
```

The expected result is that a file `/target/sdks/models/typescript/sphereon-pe-models-M.m.p.tgz` is generated where `M.m.p` is arbitrary.

### Step 3 : Create a project using the generated models

The generated models can now be used in a project. The provided example will create a new `NPM` project using `typescript` as language. It will import and use `JwtObject`, similarly you can import and use other objects. 

```
cd '<workspace>'
mkdir my-pe-models-consumer-prj
cd my-pe-models-consumer-prj
npm init
```

`npm init` will ask a few questions, the default answer to those questions can be selected.

### Step 4 : Add script & Import models

To use the models generated as a result of `step 1`

```
npm install
npm install --save '<workspace>/pe-openapi/target/sdks/models/typescript/sphereon-pe-models-0.0.2.tgz'
npm install --save ts-node
```

Create a folder named `scripts`

```
mkdir scripts
```

Create a file in 'scripts' named `consumer-script.ts` with following content.

```
import {JwtObject} from '@sphereon/pe-models'

var jwtObject : JwtObject = {
    alg : ['someAlgorithm']
};

console.log(jwtObject);
```

In `package.json` add a script `"my-pe-models-consumer-script": "ts-node scripts/consumer-script.ts"` in the scripts section. The resulting Package.json should look like following.

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

### Step 5 : Check if everything went correctly

In the terminal run the following command from the `<workspace>/my-pe-models-consumer-prj` 

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

Update the version in package.json `template/models-typescript/package.json`.

```
"version": "M.n.p",
```

Since the `package.json` file is being copied from the `template` directory instead of being created, the POM's version is not effective. Keeping it aligned would still be beneficial though.

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

`npm login` may ask a few questions.

```
npm publish sphereon-pe-models-M.m.p.tgz --access public
```

```
npm logout
```

#### Step D : Check 

Check on `npmjs.com`

Install the module following the included `README.md`. 
