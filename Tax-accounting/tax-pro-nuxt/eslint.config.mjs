import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Custom flat configs appended after Nuxt's configs
)
  // Override TypeScript rules for Nuxt
  .override("nuxt/typescript/rules", {
    rules: {
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "@typescript-eslint/array-type": ["error", { default: "array" }],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/no-explicit-any": "off", // <-- TODO: enable this rule after fixing swagger types
    },
  }).append({
    files: ["**/.test.ts", "**/.spec.ts", "**/__tests__/**/*.ts", "./tests/**"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // <-- only applies to test files
    },
  });
