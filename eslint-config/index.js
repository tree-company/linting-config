import eslint from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import reactPluginRecommended from "eslint-plugin-react/configs/recommended.js";
import reactPluginJsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import globals from "globals";

const defaultConfig = [
  eslint.configs.recommended,
  prettierPlugin,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module",
      },
    },
    rules: {
      curly: ["warn", "multi-line", "consistent"],
      "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    },
  },
];

const reactConfig = [
  ...defaultConfig,
  reactPluginRecommended,
  reactPluginJsxRuntime,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2023,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": 0,
    },
  },
];

const plugin = {
  // We have to repeat the information from our package.json. [see](https://eslint.org/docs/latest/extend/plugin-migration-flat-config#adding-plugin-meta-information)
  meta: {
    name: "@tree-company/eslint-config",
    version: "0.4.1",
  },
  configs: {
    default: defaultConfig,
    react: reactConfig,
  },
};

export default plugin;
