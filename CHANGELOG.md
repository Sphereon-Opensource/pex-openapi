# Release Notes

## v2.1.0 - 2023-09-29

- Feature
    - Add support for `items` and `contains` in filter
    - Add support for `jwt_vc_json` format
    - 
## v2.0.0 - 2023-05-01

- Fix
  - Remove wrong export path
  
## v2.0.0 - 2023-04-30

- Fix
    - `_const` and `_enum` are now correctly exposed in the typescript models/interfaces as `const` and `enum`. This is
      a breaking change. Simply remove all underscore prefixes
    - Removed some siblings for refs causing some warnings/errors

## v1.2.2 - 2023-02-24

- Fix
    - issuance changed from string to object in input descriptors. Issuance is now an object with a `manifest` property
      that contains the URL of the Credential Manifest.

## v1.2.0 - 2023-02-23

- Feature
    - Allow issuance in input descriptors for credential manifest URLs. Although not spec compliant, it is used in the
      wild.

## v0.0.5 - 2021-08-25

- Feature: added REST API v1 specs and data types
- Documentation
    - modular documentation
    - docs for API
- Configuration for API stubs creation

## v0.0.4 - 2021-05-27

- Fix: changed the nature of the 'path_nested' property in a descriptor from array to object.

## v0.0.3 - 2021-05-27

- Presentation Submission object added.

## v0.0.2 - 2021-05-12

- Variable name input descriptor corrected.

## v0.0.1 - 2021-05-01

- Initial release: Basic Structures.
