const env = require('../environments');
const config = require('./common.config')();

module.exports = function makeClientConfig(type) {
  return require('./' + (type || env.NODE_ENV) + '.config')(config);
};
