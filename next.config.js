// next.config.js
const { createRequire } = require('module');
const require = createRequire(import.meta.url); // Only needed if you are using ES modules

// Import your desired configurations directly
const withPlugins = require('next-compose-plugins'); // Example of using a plugin
const nodePolyfillWebpackPlugin = require('node-polyfill-webpack-plugin'); // Example of importing a plugin

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        // Ensure fallback for certain Node.js core modules
        config.resolve.fallback = {
            ...config.resolve.fallback,
            buffer: require.resolve('buffer/'),
            url: require.resolve('url/'),
            https: require.resolve('https-browserify'),
            querystring: require.resolve('querystring-es3'),
            stream: require.resolve('stream-browserify'),
            net: false, // Disable 'net' module
            tls: false, // Disable 'tls' module
            child_process: false, // Disable 'child_process' module
        };

        return config; // Return the modified config
    },
};

// Export the configuration
module.exports = withPlugins([[nodePolyfillWebpackPlugin]], nextConfig);
