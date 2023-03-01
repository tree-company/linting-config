module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: [],
  globals: {},
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  rules: {
    curly: ["warn", "multi-line", "consistent"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
  },
};
