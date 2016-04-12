import config from '../..'

export default {
  test: /\.scss$/,
  loaders: [
    'style',
    `css?${JSON.stringify({
      sourceMap: config.DEBUG,
      // CSS Modules https://github.com/css-modules/css-modules
      // modules: true,
      localIdentName: config.DEBUG ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
      // CSS Nano http://cssnano.co/options/
      minimize: !config.DEBUG
    })}!sass?${JSON.stringify({
      sourceMap: config.DEBUG
    })}`
  ]
}
