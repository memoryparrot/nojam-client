module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "prettier/react",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  // prettier/react 추가
  rules: {
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/react-in-jsx-scope": 0,
  },
};
