process.env.NODE_ENV = (process.env.NODE_ENV || 'development').trim();

const vendors = require('./dependencies').vendors;
const aliases = require('./dependencies').aliases;
const resolve = require('path').resolve;
const argv = require('yargs').argv;
const _slice = [].slice;

const DIR_SRC = 'src';
const DIR_DIST = 'build';
const DIR_CONFIG = 'configs';
const PROJECT_PATH = resolve(__dirname, '../../');

function inProject() {
  return resolve.apply(resolve, [PROJECT_PATH].concat(_slice.apply(arguments)));
}

// ------------------------------------
// Configuration Definition
// ------------------------------------
module.exports = exports = {

  // environment
  NODE_ENV: process.env.NODE_ENV,
  __PROD__: process.env.NODE_ENV === 'production',
  __DEV__: process.env.NODE_ENV === 'development',
  __DEBUG__: process.env.NODE_ENV === 'development' && !!argv.debug,

  // path helpers
  DIR_SRC: DIR_SRC,
  DIR_DIST: DIR_DIST,
  DIR_CONFIG: DIR_CONFIG,
  PROJECT_PATH: PROJECT_PATH,
  inProject: inProject,
  inSrc: inProject.bind(undefined, DIR_SRC),
  inDist: inProject.bind(undefined, DIR_DIST),

  // build system
  VENDOR_DEPENDENCIES: vendors,
  ALIAS: aliases,

  // server configuration
  WEBPACK_PORT: 3000,
  //SERVER_PORT: process.env.PORT || 4000
};
