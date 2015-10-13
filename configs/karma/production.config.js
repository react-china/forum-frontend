const DIR_DIST = require('../environments').DIR_DIST;

module.exports = function karmaProductionConfigModifier(config) {
  config.singleRun = true;
  config.reporters = ['spec', 'coverage'];
  config.coverageReporter = {
    type: 'html',
    dir: DIR_DIST + '/coverage/',
  };

  return config;
};
