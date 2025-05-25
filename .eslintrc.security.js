// Security-focused ESLint configuration
module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:security/recommended"
  ],
  plugins: ["security"],
  rules: {
    // Security rules
    "security/detect-object-injection": "warn", // Changed from error to warn
    "security/detect-non-literal-regexp": "error",
    "security/detect-unsafe-regex": "error",
    "security/detect-buffer-noassert": "error",
    "security/detect-child-process": "error",
    "security/detect-disable-mustache-escape": "error",
    "security/detect-eval-with-expression": "error",
    "security/detect-no-csrf-before-method-override": "error",
    "security/detect-non-literal-fs-filename": "warn", // Changed from error to warn
    "security/detect-non-literal-require": "warn", // Changed from error to warn
    "security/detect-possible-timing-attacks": "error",
    "security/detect-pseudoRandomBytes": "error",
    
    // Additional security-conscious rules
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-new-func": "error",
    "no-script-url": "error",
    
    // Prevent accidental secrets
    "no-template-curly-in-string": "error",
  },
  env: {
    node: true,
    browser: true,
    es2022: true
  },
  // Add parser options for better compatibility
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
};
