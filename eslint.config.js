// Flat config for ESLint v9+
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.js", "test/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        jest: true,
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      // Match previous behavior
      "react/prop-types": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },
];
