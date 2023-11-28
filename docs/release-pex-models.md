## Releasing type-script

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
yarn install
yarn build
```

#### Step C : Publish

If not already logged in at npmjs.org with a token
```
yarn login
```

`npm login` may ask a few questions.

```
yarn publish --access public
```

#### Step D : Check

Check on `npmjs.com`

Install the module following the included `README.md`. 


## Releasing java

If you have the correct settings in your local workspace, you can easily publish a new version on Sphereon repository (`sphereon-opensource-snapshots`)
if you do, you can create and upload a new version with running:

```
mvn clean deploy -P java
```
