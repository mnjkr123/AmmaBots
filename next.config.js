// next.config.js
const { createRequire } = require('module');
const require = createRequire(import.meta.url); // Allows using require in ES modules

// Import your TypeScript config
const config = require('./next.config.ts').default;

module.exports = config;
