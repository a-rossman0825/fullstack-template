// eslint.config.js
import js from "@eslint/js"
import tseslint from "typescript-eslint"
import vue from "eslint-plugin-vue"
import prettier from "eslint-plugin-prettier"

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vue.configs["flat/recommended"],

  {
    files: ["**/*.{ts,tsx,vue}"], // replaces --ext flag
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      prettier,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "vue/multi-word-component-names": "off",
      "prettier/prettier": "error",
    },
  },
]