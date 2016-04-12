import path from 'path'
import webpack from 'webpack'
import AssetsPlugin from 'assets-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import config from '../index'
import defaultConfig from './default'

const clientConfig = {
  ...defaultConfig,

  entry: './client.js',

  output: {
    ...defaultConfig.output,
    path: path.join(defaultConfig.output.path, 'public'),
    filename: config.DEBUG ? '[name].js?[chunkhash]' : '[name].[chunkhash].js',
    chunkFilename: config.DEBUG ? '[name].[id].js?[chunkhash]' : '[name].[id].[chunkhash].js'
  },

  plugins: [
    ...defaultConfig.plugins,

    new webpack.DefinePlugin({ ...config, 'process.env.BROWSER': true }),

    // Emit a file with assets paths
    // https://github.com/sporto/assets-webpack-plugin#options
    new AssetsPlugin({
      path: path.resolve(__dirname, '../../build'),
      filename: 'assets.js',
      processOutput: (x) => `module.exports = ${JSON.stringify(x)};`
    }),

    // Add production plugins if we're doing an optimized build
    ...(!config.DEBUG ? [
      new ExtractTextPlugin('[name].[chunkhash].css', { allChunks: true }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
          screw_ie8: true,
          // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
          warnings: config.VERBOSE
        }
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new CompressionPlugin()
    ] : [])
  ]
}

// Replace loaders with "ExtractTextPlugin" if we are building for production
if (!config.DEBUG) {
  const originalLoaders = clientConfig.module.loaders[1].loaders
  delete clientConfig.module.loaders[1].loaders
  clientConfig.module.loaders[1].loader = ExtractTextPlugin.extract(...originalLoaders)
}

export default clientConfig
