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

## Security

As with most security- and cryptography-related tools, the overall security of your system will largely depend on your design decisions (which key types you will use, where you'll store the private keys, what you put into your credentials, and so on.)

## Background

This is an interpretation of the
[Presentation Exchange v1.0.0](https://identity.foundation/presentation-exchange/#submission-requirements)
specification as OpenAPIs (YAMLs). 

It allows you to generate objects consistently while remaining compliant and consistent with the DIF specification.

## Setup

This is a maven-based-project. To setup locally for development run following commands.

```
cd '<workspace>'
git clone git@github.com:Sphereon-Opensource/pe-api.git
cd pe-api
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

The following command will generate the models in `<workspace>/pe-api/target/sdks/models/typescript`
```
mvn install -P models-typescript
```

### Step 2 : Package the models for publishing.

```
cd target/sdks/models/typescript
npm pack
```

Expected result is that a file `/target/sdks/models/typescript/pe-models-M.m.p.tgz` is generated where `M.m.p` is arbitrary.

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
npm install --save '<workspace>/pe-api/target/sdks/models/typescript/pe-models-0.0.1.tgz'
npm instal --save ts-node
```

Create a folder named `scripts`

```
mkdir scripts
```

Create a file in 'scripts' named `consumer-script.ts` with following contents

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
    "pe-models": "file:../pe-api/target/sdks/models/typescript/pe-models-0.0.1.tgz",
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

You should expect this to be printed on console.

```
{ alg: [ 'someAlgorithm' ] }
```

## Releasing

#### Step A : Update values

Update this README.md and Update SDK's README.md located at `template/models-typescript/README.md`

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
cd '<workspace>/my-pe-models-consumer-prj'
npm login
npm publish pe-models-M.m.p.tgz
```

#### Step D : Check 

Check on `npmjs.com`

And by installing the module as per this `README.md`. 