const assign = require('object-assign');
const webpack = require('webpack');
const env = require('../environments');

const HtmlWebpackPlugin = require('html-webpack-plugin');

function makeDefaultConfig() {
  return {
    entry: {
      app: [env.inSrc('javascripts')],
      vendor: env.VENDOR_DEPENDENCIES,
    },
    output: {
      filename: '[name].[hash].js',
      path: env.inDist(''),
      publicPath: '/',
    },
    target: 'web',
    resolve: {
      root: [env.inSrc],
      modulesDirectories: ['node_modules'],
      extensions: ['', '.js', '.jsx'],
      alias: env.ALIAS.reduce((module, name) => {
        module[name] = env.inSrc('javascripts/' + name);
        return module;
      }, {}),
    },
    module: {
      preLoaders: [
        {test: /\.(js|jsx)$/, loaders: ['eslint-loader'], include: env.inProject(env.DIR_SRC, 'javascripts')},
      ],
      loaders: [
        {
          test: /\.(js|jsx)$/,
          include: [env.inProject(env.DIR_SRC), env.inProject(env.DIR_CONFIG)],
          loader: 'babel',
          query: {
            stage: 0,
            optional: ['runtime'],
            env: {
              development: {
                plugins: ['react-transform'],
                extra: {
                  'react-transform': {
                    transforms: [{
                      transform: 'react-transform-catch-errors',
                      imports: ['react', 'redbox-react'],
                    }],
                  },
                },
              },
            },
          },
        },
        {
          test: /\.scss$/,
          loaders: [
            'style-loader',
            'css-loader',
            'autoprefixer?browsers=last 2 version',
            'sass-loader?includePaths[]=' + env.inSrc('stylesheets'),
          ],
        },
      ],
    },
    eslint: {configFile: env.inProject('.eslintrc'), failOnError: env.__PROD__, emitWarning: env.__DEV__},
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(env.NODE_ENV),
        },
        '__DEBUG__': env.__DEBUG__,
        '__DEV__': env.__DEV__,
        '__PROD__': env.__PROD__,
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new HtmlWebpackPlugin({
        template: env.inSrc('index.html'),
        hash: true,
        filename: 'index.html',
        minify: env.__PROD__,
        inject: 'body',
      }),
    ],
  };
}

module.exports = function makeConfig(configModifier) {
  return assign({}, makeDefaultConfig(), configModifier);
};

