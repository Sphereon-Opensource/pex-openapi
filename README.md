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

A standardised presentation exchange is crucial for interoperability between different systems that are used by verifiers and holders (e.g. wallets). It enables the verifiers- and holder-systems to interpret models used by each other consistently. The PE-OpenAPI specification and Models Generator will allow for use-cases with the need to implement a Presentation Exchange, possibly using different programming languages.  

### PE-OpenAPI specification
The PE-OpenAPI specification is a collection of OpenAPI 3 specification YAML files. It can be used by third parties to generate the models and SDKs for their own desired framework and programming language. The specification is used to create the Typescript models as described below.

The PE-OpenAPI specification is used to generate the models and SDKs for Sphereon's [PE-JS library](https://github.com/Sphereon-Opensource/pe-js/)

### PE-OpenAPI Models Generator (Coming soon)
The PE-OpenAPI Models Generator is a pre-configured component for generating the models from the PE-OpenAPI specification YAML files. Developers who intend to integrate the DIF PE specification in their TypeScript/JavaScript project can either extend this project, or follow the [guide] (Coming soon) to make it part of their code-bases.

### PE-Models library (Coming soon)
The PE-Models library is a pre-published, and ready to use typescript node-module that can be directly downloaded and installed from [npmjs.com](https://www.npmjs.com/package/@sphereon/pe-models). This library can be used in any JavaScript project, providing a consistent structure of the models required in presentation exchange between verifiers and holders of verifiable credentials.

Additionally, the PE-Models library can be used to create libraries for verification of presentation definition and submission objects themselves. In this fashion, the PE-Models library is used in Sphereon's [PE-JS library](https://github.com/Sphereon-Opensource/pe-js/) to validate the model objects.

## Security

As with most security- and cryptography-related tools, the overall security of your system will largely depend on your design decisions which key types you will use, where you'll store the private keys, what you put into your credentials, and so on.

## Setup

This is a maven-based-project. To set it up locally for development, run following commands.

```
cd '<workspace>'
git clone git@github.com:Sphereon-Opensource/pe-openapi.git
cd pe-openapi
```

## Usage

### Step 0 : Check GIT branch.

Please check if you are on the right branch. The steps you are following should be from the same branch (e.g. in a browser) as in your `cloned` git repo. 

To list all the branches in a local machine and also highlight the checked-out branch use the following command. 
```
git branch
```

To switch the branch use the following command. 
```
git checkout <branch-name>
```

### Guides

* [Generate PE-Models](docs/generate-pe-models.md)
* [Release PE-Models](docs/release-pe-models.md)
* [Generate PE-API](docs/generate-pe-api.md)
