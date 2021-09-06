require('./init');

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.config');
const devServerConfig = require('../config/webpackDevServer.config');

function start() {
  const compiler = webpack(webpackConfig);
  const server = new WebpackDevServer({ ...devServerConfig, setupExitSignals: true }, compiler);
  return server.start();
}

start()
  .then(() => {
    console.log(chalk.cyan('Starting the development server...\n'));
  })
  .catch(err => {
    console.error(err.message);
    process.exit(1);
  });
