const path = require('path');

module.exports = {
    // ... your existing configuration
    resolve: {
        fallback: {
            fs: false,
            child_process: false,
            os: require.resolve('os-browserify/browser'),
            path: require.resolve('path-browserify'),
            querystring: require.resolve('querystring-es3'),
            stream: require.resolve('stream-browserify'),
        },
    },
    // ...
};
