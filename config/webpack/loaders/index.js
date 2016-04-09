import config from '../..';
import javascriptLoader from './javascript'
import styleLoader from './style'

export default [
  javascriptLoader,
  styleLoader,
  { test: /\.json$/, loader: 'json-loader', },
  { test: /\.txt$/, loader: 'raw-loader', },
  {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
    loader: 'url-loader',
    query: {
      name: config.DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
      limit: 10000,
    },
  },
  {
    test: /\.(eot|ttf|wav|mp3)$/,
    loader: 'file-loader',
    query: {
      name: config.DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
    },
  }
];
