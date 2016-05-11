import path from 'path'
import config from '../index'
import loaders from './loaders'

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1'
]

const defaultWebpackConfig = {
  // Input
  context: path.resolve(__dirname, '../../src'),

  // Output
  output: {
    path: path.resolve(__dirname, '../../build'),
    publicPath: '/',
    sourcePrefix: '  '
  },

  // Loaders
  module: { loaders },

  // is it the right place ? at least needed server side for HMR. Is it required if DEBUG == false?
  recordsPath: path.resolve(__dirname, '../../build/_records'),

  resolve: {
    root: path.resolve(__dirname, '../../src'),
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
  },

  // Cache generated modules and chunks to improve performance for multiple incremental builds.
  cache: config.DEBUG,

  // Switch loaders to debug mode.
  debug: config.DEBUG,

  // TODO Use debug here to choose value?
  devtool: 'source-map',

  stats: {
    colors: true,
    reasons: config.DEBUG,
    hash: config.VERBOSE,
    version: config.VERBOSE,
    timings: true,
    chunks: config.VERBOSE,
    chunkModules: config.VERBOSE,
    cached: config.VERBOSE,
    cachedAssets: config.VERBOSE
  },

  plugins: [],

  sassLoader: {
    includePaths: [path.resolve(__dirname, '../node_modules')]
  },

  /* eslint-disable global-require */
  postcss (bundler) {
    return [
      require('postcss-import')({ addDependencyTo: bundler }),
      require('precss')(),
      require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS })
    ]
  }
  /* eslint-enable global-require */
}

export default defaultWebpackConfig
