const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Note the capitalization
require('babel-register');

module.exports = {
    entry: ['@babel/polyfill', './src/app.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true, // Optional: Cleans the output directory before each build
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public/'),
        },
        proxy: {
            '/api': 'http://localhost:3000',
        },
        hot: true, // Changed to true for full hot module replacement
        historyApiFallback: true, // Optional: use this if you're using React Router
    },
};
