## Generate type-script models

### Step 1 : Generate models

The following command will generate the models in `<workspace>/pex-openapi/target/sdks/models/typescript`.
```
mvn clean install -P models-typescript
```

### Step 2 : Package the models for publishing.

```
cd target/sdks/models/typescript
npm install
npm build
npm pack
```

The expected result is that a file `/target/sdks/models/typescript/sphereon-pex-models-M.m.p.tgz` is generated where `M.m.p` is arbitrary.

### Step 3 : Create a project using the generated models

The generated models can now be used in a project. The provided example will create a new `NPM` project using `typescript` as language. It will import and use `JwtObject`, similarly you can import and use other objects.

```
cd '<workspace>'
mkdir my-pex-models-consumer-prj
cd my-pex-models-consumer-prj
npm init
```

`npm init` will ask a few questions, the default answer to those questions can be selected.

### Step 4 : Add script & Import models

To use the models generated as a result of `step 1`

```
npm install
npm install --save '<workspace>/pex-openapi/target/sdks/models/typescript/sphereon-pex-models-2.0.0.tgz'
npm install --save ts-node
```

Create a folder named `scripts`

```
mkdir scripts
```

Create a file in 'scripts' named `consumer-script.ts` with following content.

```
import {JwtObject} from '@sphereon/pex-models'

var jwtObject : JwtObject = {
    alg : ['someAlgorithm']
};

console.log(jwtObject);
```

In `package.json` add a script `"my-pex-models-consumer-script": "ts-node scripts/consumer-script.ts"` in the scripts section. The resulting Package.json should look like following.

```
{
  "name": "my-pex-models-consumer-prj",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
	"my-pex-models-consumer-script": "ts-node scripts/consumer-script.ts"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@sphereon/pex-models": "file:../pe-openapi/target/sdks/models/typescript/sphereon-pex-models-2.0.0.tgz",
    "ts-node": "^9.1.1"
  }
}
```

### Step 5 : Check if everything went correctly

In the terminal run the following command from the `<workspace>/my-pex-models-consumer-prj`

```
cd '<workspace>/my-pex-models-consumer-prj'
npm run my-pex-models-consumer-script
```

You should expect this to be printed on the console.

```
{ alg: [ 'someAlgorithm' ] }
```

## Generate java models

### Step 1 : Generate models
The following command will generate the models in `<workspace>/pex-openapi/target/classes/com/sphereon/pex/models`.
```
mvn clean install -P java
```
