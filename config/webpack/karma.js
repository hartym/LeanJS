require('babel-register')

// Extend our default webpack config with karma specific settings.
module.exports = Object.assign({}, require('./default').default, {
  devtool: 'cheap-module-eval-source-map',

  node: {
    fs: 'empty'
  }
})

module.exports.module.loaders[0].loader = 'babel-istanbul'

