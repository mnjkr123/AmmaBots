module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended', // If you're using TypeScript
    ],
    parser: '@typescript-eslint/parser', // If you're using TypeScript
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint', // If you're using TypeScript
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // Your custom rules
    },
};
