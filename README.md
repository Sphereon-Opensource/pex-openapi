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

The Presentation Exchange OpenAPI (PEX-OpenAPI) is an interpretation of the
[DIF Presentation Exchange v2.0.0](https://identity.foundation/presentation-exchange/) and [DIF Presentation Exchange v1.0.0](https://identity.foundation/presentation-exchange/spec/v1.0.0/) 
specification as OpenAPIs (YAMLs), providing an implementation agnostic, 
and stateful interaction mediation between holders and verifiers. 

A standardised Presentation Exchange is crucial for interoperability between different systems that are used by verifiers and holders (e.g. wallets). It enables the verifiers- and holder-systems to interpret models used by each other consistently. The PEX-OpenAPI specification and Models Generator will allow for use-cases with the need to implement a Presentation Exchange, possibly using different programming languages.  

### PEX-OpenAPI specification
The PEX-OpenAPI specification is a collection of OpenAPI 3 specification YAML files. It can be used by third parties to generate the models and SDKs for their own desired framework and programming language. The specification is used to create the Typescript models as described below.

The PEX-OpenAPI specification is used to generate the models and SDKs for Sphereon's [PEX library](https://github.com/Sphereon-Opensource/pex/)

### PEX-OpenAPI Models Generator
The PEX-OpenAPI Models Generator is a pre-configured component for generating the models from the PEX-OpenAPI specification YAML files. Developers who intend to integrate the DIF Presentation Exchange specification in their TypeScript/JavaScript project can either extend this project, or follow the [guide] (Coming soon) to make it part of their code-bases.

### PEX-Models library (Coming soon)
The PEX-Models library is a pre-published, and ready to use typescript node-module that can be directly downloaded and installed from [npmjs.com](https://www.npmjs.com/package/@sphereon/pex-models). This library can be used in any JavaScript project, providing a consistent structure of the models required in presentation exchange between verifiers and holders of verifiable credentials.

Additionally, the PEX-Models library can be used to create libraries for verification of presentation definition and submission objects themselves. In this fashion, the PEX-Models library is used in Sphereon's [PEX library](https://github.com/Sphereon-Opensource/pex/) to validate the model objects.

## Security

As with most security- and cryptography-related tools, the overall security of your system will largely depend on your design decisions which key types you will use, where you'll store the private keys, what you put into your credentials, and so on.

## Setup

This is a maven-based-project. To set it up locally for development, run following commands.

```
cd '<workspace>'
git clone git@github.com:Sphereon-Opensource/pex-openapi.git
cd pex-openapi
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

* [Generate PEX-Models](docs/generate-pex-models.md)
* [Release PEX-Models](docs/release-pex-models.md)
* [Generate PEX-API](docs/generate-pex-api.md)
