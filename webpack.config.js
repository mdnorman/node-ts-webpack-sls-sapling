const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
  entry: './src/index.ts',
  output: {
    filename: '[name].bundle.js',
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

  plugins: [new HtmlWebpackPlugin({ title: 'CHANGEME' }), new webpack.HotModuleReplacementPlugin()],

  module: {
    rules: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' },
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

module.exports = webpackConfig;
