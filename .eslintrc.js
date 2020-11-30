module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module" // es6 import/export
  },
  parser: "babel-eslint", // class properties
  plugins: ["prettier"],
  rules: {
    "react/prop-types": [0],
    "prettier/prettier": [
      "warn",
      {
        semi: true,
        printWidth: 90
      }
    ],
    "no-console": 0,
    "max-len": [2, { code: 90, ignoreComments: true }]
  }
};
