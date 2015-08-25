const env = require('../environments');
const KARMA_ENTRY_FILE = 'karma.entry.js';

function makeDefaultConfig() {
  const preprocessors = {};

  preprocessors[KARMA_ENTRY_FILE] = ['webpack'];
  preprocessors[env.SRC_DIRNAME + '/**/*.js'] = ['webpack'];

  return {
    files: [
      '../../node_modules/phantomjs-polyfill/bind-polyfill.js',
      KARMA_ENTRY_FILE
    ],
    frameworks: ['jasmine'],
    preprocessors: preprocessors,
    reporters: ['dots'],
    browsers: ['PhantomJS'],
    webpack: function () {
      return require('../webpack/build.config')();
    }(),
    webpackMiddleware: {
      noInfo: true
    },
    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-spec-reporter')
    ]
  };
}

module.exports = function (karmaConfig) {
  return karmaConfig.set(
    require('./' + env.NODE_ENV + '.config')(makeDefaultConfig())
  );
};
