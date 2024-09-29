// @ts-check

import { createRequire } from 'module';
const require = createRequire(import.meta.url); // Allows using require in ES modules
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

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

        // Add the NodePolyfillPlugin to the webpack plugins
        config.plugins.push(new NodePolyfillPlugin());

        return config;
    },
};

export default nextConfig; // Export the configuration
