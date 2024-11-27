module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "react-hooks/rules-of-hooks": "warn",
    "no-undef": "off",
    "no-redeclare": "off",
    "no-comments/disallowComments": [
      "error",
      {
        allow: [
          "TODO",
          "FIXME",
          "NOTE",
          "DEBUG",
          "eslint-disable-next-line",
          "eslint-disable no-unused-vars",
          "million-ignore",
        ],
      },
    ],
    "no-loss-of-precision": "off",
    "no-async-promise-executor": "off",
    "no-unsafe-finally": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  ignorePatterns: ["build", ".eslintrc.cjs", "bootstrap.bundle.min.js"],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "no-comments"],
};
