// eslint.config.cjs (Flat config version)
module.exports = [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
      },
      globals: {
        browser: true,
        node: true,
      },
    },
    rules: {
      "no-console": "warn",
      eqeqeq: "error",
    },
  },
];
