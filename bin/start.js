import nodemon from 'nodemon'
import path from 'path'
import Browsersync from 'browser-sync'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../config'
import webpackDefaultConfig from '../config/webpack/default'
import webpackFrontendConfig from '../config/webpack/client'
import logStats from './lib/log-stats'

/**
 * Creates application bundles from the source files.
 */
export default function start () {
  return new Promise((resolve, reject) => {
    nodemon({
      exec: 'babel-node',
      script: path.join(__dirname, '../src/server.js'),
    })

    nodemon.on('start', function () {
      console.log('[nodemon] Backend started.');
    }).on('quit', function () {
      console.log('[nodemon] Backend stopped.');
    }).on('restart', function (files) {
      console.log('[nodemon] Files changed, restarting.');
      files.map((file) => {
        console.log(' -', file)
      })
    });

    webpackFrontendConfig.entry = [
      webpackFrontendConfig.entry,
      'webpack-hot-middleware/client'
    ]

    // Tune the output config for our dev middleware. The «path» part is really important, I don't
    // know if the hash/chunkhash part has any use.
    webpackFrontendConfig.output.path = path.join(webpackDefaultConfig.output.path, 'public')
    webpackFrontendConfig.output.filename = webpackFrontendConfig.output.filename.replace('[chunkhash]', '[hash]')
    webpackFrontendConfig.output.chunkFilename = webpackFrontendConfig.output.chunkFilename.replace('[chunkhash]', '[hash]')

    // Client side plugins for proxy-mode development
    webpackFrontendConfig.plugins = [
      new webpack.HotModuleReplacementPlugin(),
      ...webpackFrontendConfig.plugins
    ]

    // Patch Webpack's babel loader(s)
    webpackFrontendConfig.module.loaders.filter(x => x.loader === 'babel-loader')
      .forEach((x) => {
        x.loaders = ['react-hot', x.loader + '?' + JSON.stringify(x.query || {})]
        delete x.loader
        delete x.query
      });

    const bundler = webpack(webpackFrontendConfig);
    const webpackMiddleware = webpackDevMiddleware(bundler, {
      publicPath: webpackFrontendConfig.output.publicPath,
      stats: { colors: true }
    })

    let browsersync = null;
    bundler.plugin('done', (err, stats) => {
      if (!browsersync) {

        browsersync = Browsersync.create();
        browsersync.init({
          ...(config.DEBUG ? {} : { notify: false, ui: false }),
          open: false,
          proxy: {
            target: 'localhost:3000',
            middleware: [
              webpackMiddleware,
              webpackHotMiddleware(bundler),
            ]
          }
        });
      }

      console.log('[webpack] State is now valid.')
    });
  });
}


