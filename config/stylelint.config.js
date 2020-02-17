/** @type {import('stylelint').Configuration} */
const config = {
  extends: ["stylelint-config-standard", "stylelint-config-styled-components"],
  plugins: ["stylelint-order"],
  rules: {
    "declaration-block-trailing-semicolon": false,
    "declaration-empty-line-before": "never",
    "order/properties-alphabetical-order": true,
  },
};
module.exports = config;
