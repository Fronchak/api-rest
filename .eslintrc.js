module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "no-console": "off",
    quotes: "off",
    "class-methods-use-this": "off",
    "comma-dangle": "off",
    "import/first": "off",
    "no-param-reassign": "off",
    "arrow-parens": "off"
  },
};
