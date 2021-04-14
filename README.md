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
- [Install](#install)
- [Usage](#usage)

## Security

As with most security- and cryptography-related tools, the overall security of your system will largely depend on your design decisions (which key types you will use, where you'll store the private keys, what you put into your credentials, and so on.)

## Background

This is an interpretation of the
[Presentation Exchange v1.0.0](https://identity.foundation/presentation-exchange/#submission-requirements)
specification as OpenAPIs (YAMLs). 

It allows you to generate objects consistently while remaining compliant and consistent with the DIF specification.

## Install

- Node.js 12+ recommended.

To install locally (for development):

```
git clone git@github.com:Sphereon-Opensource/pe-api.git
cd pe-api
npm install
npm run clean_dist
```

The generated models will be available in the `target/dist` directory

## Usage

An examplary use of `PresentationDefinition` will look like following

in your `example.ts` file 
```
import { PresentationDefinition } from '../models/PresentationDefinition';

new PresentationDefinition...

```

## Releasing
Use the following commands to authenticate with Nexus and publish:
```
npm adduser --registry=https://nexus.qa.sphereon.com/repository/sphereon-opensource-npm/
npm publish
```
