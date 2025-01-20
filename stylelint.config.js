/** @type {import('stylelint').Config} */
module.exports = {
  customSyntax: require('postcss-scss'),
  extends: ["stylelint-config-standard",  "stylelint-config-clean-order"],
  rules: {
    'declaration-empty-line-before': null,
    'selector-class-pattern': null,
  },
};