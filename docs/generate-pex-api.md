## Generate type-script Api
### Step 1 : Generate API stubs

The following command will generate the API stubs in `<workspace>/pex-openapi/target/sdks/api/typescript`.
```
mvn clean install -P api-typescript
```

The api stubs can be found at:

```
cd target/sdks/typescript
```

## Generate java Api

### Step 1 : Generate API stubs

The following command will generate the API stubs in `<workspace>/pex-openapi/target/classes/com/sphereon/pex/api`.

```
mvn clean install -P java
```