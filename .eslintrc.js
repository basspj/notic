module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "@react-native-community"
  ],
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    useJSXTextNode: true,
    project: "./tsconfig.json"
  },
  rules: {
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": "off",
    "import/no-unresolved": "off",
    "no-use-before-define": "off",
    "spaced-comment": "off"
  },
  globals: {
    __PATH_PREFIX__: "readonly",
    graphql: false
  }
};
