const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config')({}, {});
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',
  disableHostCheck: true,
  historyApiFallback: true,
};

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack({ ...config, mode: 'development' });
const server = new WebpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});
