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

    preprocessors: {
      'test/**/*.js': ['webpack'],
      'src/**/*.js': ['webpack']
    },

    reporters: ['tap', 'coverage'],

    coverageReporter: {
      reporters: [
        {type: 'html', dir: 'coverage/'},
        {type: 'text', file: 'coverage.txt'}
      ]
    },

    webpack: require('./webpack/karma'),

    webpackServer: {
      noInfo: true
    },

    webpackMiddleware: {
      stats: 'errors-only'
    }

  });
};
