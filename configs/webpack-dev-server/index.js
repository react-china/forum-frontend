const webpack = require('webpack');
const argv = require('yargs').argv;
const env = require('../environments');
const WebpackDevServer = require('webpack-dev-server');
const makeCompiler = require('../webpack/build.config');

const QUIET_MODE = !!argv.quiet;

const server = new WebpackDevServer(webpack(makeCompiler()), {
  contentBase: env.inProject(env.DIR_SRC),
  hot: true,
  quiet: QUIET_MODE,
  noInfo: QUIET_MODE,
  lazy: false,
  stats: {colors: true},
  historyApiFallback: true,
});

server.listen(env.WEBPACK_PORT, 'localhost', () => {
  console.log('Webpack dev server running at localhost:' + env.WEBPACK_PORT);
});

module.exports = exports = server;
