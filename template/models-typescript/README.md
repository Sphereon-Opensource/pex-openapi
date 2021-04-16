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
- [Usage](#usage)

## Security

As with most security- and cryptography-related tools, the overall security of your system will largely depend on your design decisions (which key types you will use, where you'll store the private keys, what you put into your credentials, and so on.)

## Background

This is an interpretation of the
[Presentation Exchange v1.0.0](https://identity.foundation/presentation-exchange/#submission-requirements)
specification as models.

It allows you to generate objects consistently while remaining compliant and consistent with the DIF specification.

## Usage

### Step 1 : Create Project

The models generated can be used in your project. This is an example where you create a new `NPM` project to use `typescript` language, import and use `JwtObject`. Similarly, you can import and use other objects.

```
cd '<workspace>'
mkdir my-pe-models-consumer-prj
cd my-pe-models-consumer-prj
npm init
```

`npm init` asks few questions. The default answer to those questions can be selected.

### Step 2 : Add script & Import models

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
