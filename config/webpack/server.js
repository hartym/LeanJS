import webpack from 'webpack'
import config from '..';

import defaultConfig from './default';

/**
 * This is webpack configuration for server side javascript, aimed for a build
 * without intrumentation (like dev middleware or hot module reload).
 *
 * Instrumentation will be added by the runServer script, if needed.
 */
const serverConfig = {
    // Extends common configuration
    ...defaultConfig,

    // Entry point
    entry: './server.js',

    // Output a single server.js, under the build directory
    output: {
        ...defaultConfig.output,
        filename: 'server.js',
        libraryTarget: 'commonjs2',
    },

    // This will be run by node. Also used by our scripts to detect it is
    // the server-side configuration.
    target: 'node',

    // How do we take apart bundlable scripts and external dependencies that we
    // can load from filesystem?
    externals: [
        /^\.\/assets$/,
        function filter(context, request, cb) {
            const isExternal = request.match(/^[@a-z][a-z\/\.\-0-9]*$/i);
            cb(null, Boolean(isExternal));
        },
    ],
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
    },
    devtool: 'source-map',
    plugins: [
        ...defaultConfig.plugins,
        new webpack.DefinePlugin({ ...config, 'process.env.BROWSER': false }),
        new webpack.BannerPlugin('require("source-map-support").install();',
        { raw: true, entryOnly: false }),
    ],
};

export default serverConfig;
