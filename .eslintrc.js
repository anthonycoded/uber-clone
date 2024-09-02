module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        parser: "flow",
        semi: true,
        trailingComma: "es5",
        endOfLine: "auto",
      },
    ],
  },
};
