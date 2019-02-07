const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');

const webpackConfig = env => {
  const { mode } = env;
  const production = mode === 'production';
  const development = !production;
  const analyze = false;
  const filename = production ? '[name].[chunkhash].bundle.js' : '[name].[hash].bundle.js';

  const plugins = [new HtmlWebpackPlugin({ template: 'src/index.html.ejs' })];

  if (development) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  if (analyze) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'bundle_report.html',
      }),
    );
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
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader' },
      ],
    },
  };
};

module.exports = webpackConfig;
