module.exports = {
  BEMPattern: [
    /**
     * This allows BEM classes with global modifiers
     * ```css
     * .block {}
     * .some-block {}
     * .block--modifier {}
     * .block__element {}
     * .block__some-element {}
     * .block__element--modifier {}
     * .--global-modifier {}
     * ```
     */
    /^([a-z]+(:)?[a-z]+-?[a-z]*)?(__[0-9a-z]+-?[0-9a-z]*)?(--[0-9a-z]+-?[a-z]*)?$/,
    {
      resolveNestedSelectors: true,
      message: "Expected class selector to be BEM-style",
    },
  ],
};
