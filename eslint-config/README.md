# @tree-company/stylelint-config

## How to install
Install using `yarn add -D @tree-company/eslint-config eslint prettier`.

## How to use
You can add our base eslint config in the following way:
```js
// eslintrc.js
module.exports = {
  extends: ["@tree-company/eslint-config"],
};
```

If you work with react:
```js
// eslintrc.js
module.exports = {
  extends: ["@tree-company/eslint-config/react"],
};
```

## Versioning
Except for patch versions, all packages in from [@tree-company/linting-config](https://github.com/tree-company/linting-config) are released at the same time, with the same version.