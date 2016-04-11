require("babel-register");

module.exports = function (config) {
  config.set({
    // where is my code?
    basePath: '../',

    // choose browser
    browsers: [process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome'],

    // exit once tests are executed
    singleRun: true,

    // we test with tape, see arguments at:
    // https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4
    frameworks: ['tap'],

    // what files should we run in the browser?
    files: [
      'test/**/*.js'
    ],

    // we need all our source to be processed by webpack, as ES6 is not understandable by browsers.
    preprocessors: {
      'test/**/*.js': ['webpack'],
      'src/**/*.js': ['webpack']
    },

    // Transform tape output to nice looking console output, and send to istanbul for coverage.
    reporters: ['tap', 'coverage'],

    coverageReporter: {
      reporters: [
        {type: 'html', dir: 'coverage/'},
        {type: 'text', file: 'coverage.txt'}
      ]
    },

    // Load our Karma specific webpack configuration, that extends the base one.
    webpack: require('./webpack/karma'),

    // TODO: is there any reason for that?
    webpackServer: {
      noInfo: true
    },

    // TODO: is there any reason for that?
    webpackMiddleware: {
      stats: 'errors-only'
    }
  });
};
