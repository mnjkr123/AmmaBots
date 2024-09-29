// next.config.ts
import { NextConfig } from 'next';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import withSvgr from 'next-svgr';

const config: NextConfig = withSvgr({
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            buffer: require.resolve('buffer/'),
            url: require.resolve('url/'),
            https: require.resolve('https-browserify'),
            querystring: require.resolve('querystring-es3'),
            stream: require.resolve('stream-browserify'),
            net: false,
            tls: false,
            child_process: false,
        };

        config.plugins.push(new NodePolyfillPlugin());

        return config;
    },
});

export default config;
