module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "script",
  },
  rules: {
    "no-undef": "off",
  },
  overrides: [
    {
      files: [".docusaurus/**/*.js"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};
