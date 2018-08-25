const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const webpackConfig = (env, argv) => {
  const { mode } = env;
  const production = mode === 'production';
  const development = !production;
  const filename = production ? '[name].[chunkhash].bundle.js' : '[name].[hash].bundle.js';

  const plugins = [new HtmlWebpackPlugin({ template: 'src/index.html.ejs' })];

  if (development) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return {
    entry: './src/index.ts',
    output: {
      filename,
      path: path.resolve(__dirname, './dist'),
      publicPath: '/',
    },

    devtool: 'source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
    },

    resolve: {
      extensions: ['.ts', '.js', '.json'],
    },

    plugins,

    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /\/node_modules\//,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },

    module: {
      rules: [
        { test: /\.ts?$/, loader: 'awesome-typescript-loader' },
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            'resolve-url-loader',
            'sass-loader?sourceMap',
          ],
        },
      ],
    },
  };
};

module.exports = webpackConfig;
