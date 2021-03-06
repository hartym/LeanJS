import config from '../../index'
import path from 'path'

export default {
  test: /\.jsx?$/,
  loader: 'babel-loader',
  include: [
    path.resolve(__dirname, '../../../src'),
    path.resolve(__dirname, '../../../config'),
    path.resolve(__dirname, '../../../test'),
    path.resolve(__dirname, '../../../build/assets')
  ],
  query: {
    // https://github.com/babel/babel-loader#options
    cacheDirectory: config.DEBUG,

    // https://babeljs.io/docs/usage/options/
    babelrc: false,
    presets: [
      'react',
      'es2015',
      'stage-0'
    ],
    plugins: [
      'transform-runtime',
      ...config.DEBUG ? [] : [
        'transform-react-remove-prop-types',
        'transform-react-constant-elements',
        'transform-react-inline-elements'
      ]
    ]
  }
}

