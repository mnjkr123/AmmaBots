module.exports = {
    env: {
        browser: true,
        es2021: true,
        es6: true,
        node: true, // Add this line to enable Node.js environment
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        // Your custom rules
        // Example:
        'no-var-requires': 'off', // Disable the no-var-requires rule if needed
    },
};
