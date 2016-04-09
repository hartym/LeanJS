import path from 'path'

import { DEBUG, VERBOSE } from '..'

import loaders from './loaders'

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

const config = {
  // Input
  context: path.resolve(__dirname, '../../src'),

  // Output
  output: {
    path: path.resolve(__dirname, '../../build'),
    publicPath: '/',
    sourcePrefix: '  ',
  },

  // Loaders
  module: { loaders },

  resolve: {
    root: path.resolve(__dirname, '../src'),
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json'],
  },

  cache: DEBUG,
  debug: DEBUG,

  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
  },

  plugins: [],

  sassLoader: {
    includePaths: [path.resolve(__dirname, "../node_modules")]
  },

  postcss(bundler) {
    return [
      require('postcss-import')({ addDependencyTo: bundler }),
      require('precss')(),
      require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),
    ];
  },
}

export default config;
