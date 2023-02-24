# @tree-company/stylelint-config

## How to install
Install using `yarn add -D @tree-company/stylelint-config stylelint prettier`.

## How to use
You can add our base stylelint config in the following way:
```js
// stylelint.config.js
module.exports = {
  extends: ["@tree-company/stylelint-config"],
};
```

If you work with scss:
```js
// stylelint.config.js
module.exports = {
  extends: ["@tree-company/stylelint-config/scss"],
};
```

## Versioning
Except for patch versions, all packages in from [@tree-company/linting-config](https://github.com/tree-company/linting-config) are released at the same time, with the same version.

