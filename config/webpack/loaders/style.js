import config from '../../index'

export default {
  test: /\.scss$/,
  loaders: [
    'style',
    `css?${JSON.stringify({
      // `sourceMap` is set to false because otherwise, there will be a problem with custom fonts
      // when using the development proxy.
      // See http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts
      sourceMap: false,
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
