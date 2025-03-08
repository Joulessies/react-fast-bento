export default {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "no-undef": "off",
  },
};
