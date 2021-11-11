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
npm install
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
