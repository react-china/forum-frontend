const webpack = require('webpack');

module.exports = function makeClientDevelopmentConfig(config) {
  config.debug = true;
  config.displayErrorDetails = true;
  config.outputPathinfo = true;
  config.devtool = 'eval-source-map';
  config.entry.app.push(
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server'
  );

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );

  // We need to apply the react-transform HMR plugin to the Babel configuration,
  // but _only_ when HMR is enabled. Putting this in the default development
  // configuration will break other tasks such as test:unit because Webpack
  // HMR is not enabled there, and these transforms require it.
  config.module.loaders = config.module.loaders.map((loader) => {
    if (/js/.test(loader.test)) {
      // loader.loaders.unshift('react-hot');
      loader.query.env.development.extra['react-transform'].transforms.push({
        transform: 'react-transform-hmr',
        imports: ['react'],
        locals: ['module'],
      });
    }
    return loader;
  });

  return config;
};
