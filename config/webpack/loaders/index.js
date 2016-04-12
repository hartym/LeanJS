import config from '../../index'
import javascriptLoader from './javascript'
import styleLoader from './style'

export default [
  javascriptLoader,
  styleLoader,
  { test: /\.json$/, loader: 'json-loader' },
  { test: /\.txt$/, loader: 'raw-loader' },
  {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader',
    query: {
      name: config.DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
      limit: 10000
    }
  },
  {
    test: /\.(ttf|eot|wav|mp3)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
    query: {
      name: config.DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]'
    }
  }
]
