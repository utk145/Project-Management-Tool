module.exports = {
    extends: ["./.eslintrc.json"], // Extend your existing ESLint config

    rules: {
        // Code Quality and Readability
        complexity: ["warn", 10], // Warn if cyclomatic complexity > 10
        "max-depth": ["warn", 4], // Warn if nesting depth > 4
        "max-lines-per-function": ["warn", 50], // Warn if function length > 50 lines
        "max-params": ["warn", 4], // Warn if function has more than 4 parameters
        "no-magic-numbers": ["warn", { ignore: [-1, 0, 1] }], // Warn on magic numbers (except -1, 0, 1)

        // Best Practices
        "no-unused-vars": "warn", // Warn on unused variables
        "no-var": "warn", // Disallow `var`, use `let` or `const`
        "prefer-const": "warn", // Prefer `const` over `let` for variables that don't change
        eqeqeq: ["warn", "always"], // Require `===` and `!==`
        "no-implicit-coercion": "warn", // Disallow implicit type coercion
        "no-eval": "warn", // Disallow `eval()`
        "no-implied-eval": "warn", // Disallow implied `eval()` (e.g., `setTimeout("code")`)
        "no-throw-literal": "warn", // Disallow throwing literals (e.g., `throw "error"`)
        "no-return-await": "warn", // Disallow unnecessary `return await`
        "require-await": "warn", // Disallow async functions without `await`

        // Error Prevention
        "no-console": "warn", // Warn on `console.log` and similar
        "no-debugger": "warn", // Disallow `debugger`
        "no-alert": "warn", // Disallow `alert`, `confirm`, and `prompt`
        "no-extra-semi": "warn", // Disallow unnecessary semicolons
        "no-unreachable": "warn", // Disallow unreachable code
        "no-dupe-else-if": "warn", // Disallow duplicate conditions in `else-if`
        "no-unsafe-optional-chaining": "warn", // Disallow unsafe optional chaining

        // TypeScript-Specific Rules
        "@typescript-eslint/no-explicit-any": "warn", // Warn on `any` type usage
        "@typescript-eslint/no-unnecessary-type-assertion": "warn", // Disallow unnecessary type assertions
        "@typescript-eslint/no-floating-promises": "warn", // Disallow unhandled promises
        "@typescript-eslint/consistent-type-imports": "warn", // Enforce consistent type imports
    },
};
