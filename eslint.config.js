import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["dist/**/*"]
  },
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    files: ["**/components/ui/**/*.{js,jsx}"],
    rules: {
      "react/prop-types": "off",
    },
  },
  {
    settings: {
      react: {
        version: "19.0.0",
      },
    },
  },
];
