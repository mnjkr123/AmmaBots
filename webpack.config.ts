import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Example Webpack configuration
const webpackConfig = {
    entry: './src/index.ts', // Adjust this based on your entry file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.js'], // Add '.ts' for TypeScript files
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader', // Use ts-loader for TypeScript files
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Adjust as needed
        }),
        // other plugins...
    ],
};

// Export the Webpack configuration
export default webpackConfig;
