# @tree-company/linting-config

This repository contains the default linting configs for all Tree company projects.
These configs are published as separate packages:
* [@tree-company/eslint-config](./eslint-config/README.md)
* [@tree-company/stylelint-config](./stylelint-config/README.md)

Except for patch versions, all packages are released at the same time, with the same version.

## Releasing a new version
If you changed some of the default configs, you can easily publish a new version. We always publish a version of all packges - even if nothing changed.

To create a new release:
* Edit the version in the all the `package.json` files
* Create a new tag
* Push your changes to github

![Logo Tree company](./logo_tree.png)
