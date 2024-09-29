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
            // Add @svgr/webpack if needed
            '@svgr/webpack': require.resolve('@svgr/webpack'),
        },
    },
    // Ensure that you have a module rule for .svg files
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            // You can add any options you want for the SVGR loader here
                        },
                    },
                ],
            },
        ],
    },
    // ...
};
