# @tree-company/stylelint-config

## How to install
Install using `yarn add -D @tree-company/eslint-config eslint prettier`.

## How to use
You can add our base eslint config in the following way:
```js
// eslint.config.js
import config from "./eslint-config/index.js";

export default config.configs.default;

```

If you work with react:
```js
// eslint.config.js
import config from "./eslint-config/index.js";

export default config.configs.react;

```

To run eslint, you'll just need `eslint .` or `eslint . --fix`.

### Ignores files
If you need to ignore specific files (for example, the build output)

```js
// eslint.config.js
import config from "./eslint-config/index.js";

export default [
  ...config.configs.default,
  {
    ignores: [
      "dist/"
    ],
  },
];
```

## Versioning
Except for patch versions, all packages in from [@tree-company/linting-config](https://github.com/tree-company/linting-config) are released at the same time, with the same version.