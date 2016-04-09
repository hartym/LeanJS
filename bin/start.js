import Browsersync from 'browser-sync'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import webpackConfig from '../config/webpack'
import config from '../config'

import runServer from './runServer'

async function start() {
  await new Promise((resolve) => {
    if (config.DEBUG) {
      webpackConfig.filter(x => x.target !== 'node').forEach(config => {
        /* eslint-disable no-param-reassign */
        config.entry = ['webpack-hot-middleware/client'].concat(config.entry);
        config.output.filename = config.output.filename.replace('[chunkhash]', '[hash]');
        config.output.chunkFilename = config.output.chunkFilename.replace('[chunkhash]', '[hash]');
        config.plugins.push(new webpack.HotModuleReplacementPlugin());
        config.plugins.push(new webpack.NoErrorsPlugin());
        /* config
        .module
        .loaders
        .filter(x => x.loader === 'babel-loader')
        .forEach(x => (x.query = {
          ...x.query,

          // Wraps all React components into arbitrary transforms
          // https://github.com/gaearon/babel-plugin-react-transform

          plugins: [
            ...(x.query ? x.query.plugins : []),
            ['react-transform', {
              transforms: [
                {
                  transform: 'react-transform-hmr',
                  imports: ['react'],
                  locals: ['module'],
                }, {
                  transform: 'react-transform-catch-errors',
                  imports: ['react', 'redbox-react'],
                },
              ],
            },
          ],
        ],
      }))*/;
      /* eslint-enable no-param-reassign */
    });
  }

  const bundler = webpack(webpackConfig);
  const bundlerMiddleware = webpackMiddleware(bundler, {

    // IMPORTANT: webpack middleware can't access config,
    // so we should provide publicPath by ourselves
    publicPath: webpackConfig[0].output.publicPath,

    // Pretty colored output
    stats: webpackConfig[0].stats,

    // For other settings see
    // https://webpack.github.io/docs/webpack-dev-middleware
  });

  const hotMiddlewares = bundler
    .compilers
    .filter(compiler => compiler.options.target !== 'node')
    .map(compiler => webpackHotMiddleware(compiler));

  let handleServerBundleComplete = () => {
    runServer((err, host) => {
      if (!err) {
        const bs = Browsersync.create();
        bs.init({
          ...(config.DEBUG ? {} : { notify: false, ui: false }),

          proxy: {
            target: host,
            middleware: [bundlerMiddleware, ...hotMiddlewares],
          },

          // no need to watch '*.js' here, webpack will take care of it for us,
          // including full page reloads if HMR won't work
          //files: ['build/**/*.*'],
        }, resolve);
        handleServerBundleComplete = runServer;
      }
    });
  };

  bundler.plugin('done', () => handleServerBundleComplete());
});
}

export default start;
