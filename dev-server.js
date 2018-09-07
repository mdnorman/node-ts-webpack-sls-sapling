const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const WEBPACK_SERVER_PORT = process.env.WEBPACK_SERVER_PORT || 5000;

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

server.listen(WEBPACK_SERVER_PORT, 'localhost', () => {
  console.log(`dev server listening on port ${WEBPACK_SERVER_PORT}`);
});
