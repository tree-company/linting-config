const { selectorOrdering } = require("stylelint-semantic-groups");
const propertyOrdering = require("./rules/properties_order");
const { BEMPattern } = require("./rules/selector_class_pattern");

module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-prettier", "stylelint-order"],
  rules: {
    "declaration-no-important": true,
    "prettier/prettier": true,
    "selector-class-pattern": BEMPattern,
    "order/order": selectorOrdering,
    "order/properties-order": propertyOrdering,
  },
};
