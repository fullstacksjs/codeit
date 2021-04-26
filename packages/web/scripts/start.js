/* eslint-disable no-console */
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
require('../config/env');

const webpack = require('webpack');
const chalk = require('react-dev-utils/chalk');
const WebpackDevServer = require('webpack-dev-server');
const devServerConfig = require('../config/webpackDevServer.config');

const port = parseInt(process.env.WEB_PORT, 10) || 3000;
const host = process.env.WEB_HOST || '0.0.0.0';

function spawnDevServer(config) {
  const compiler = webpack(config);
  WebpackDevServer.addDevServerEntrypoints(config, devServerConfig);
  const devServer = new WebpackDevServer(compiler, devServerConfig);

  return new Promise((resolve, reject) => {
    devServer.listen(port, host, err => {
      err ? reject(err) : resolve({ host, port });
    });

    function killServer() {
      devServer.close();
    }

    process.on('SIGINT', killServer);
    process.on('SIGTERM', killServer);
    if (process.env.CI !== 'true') {
      process.stdin.on('end', killServer);
    }
  });
}

function start() {
  const config = require('../config/webpack.config');
  return Promise.all([spawnDevServer(config)]);
}

start()
  .then(() => {
    console.log(chalk.cyan('Starting the development server...\n'));
  })
  .catch(err => {
    console.error(err.message);
    process.exit(1);
  });

process.on('SIGINT', () => {
  process.exit();
});

process.on('SIGTERM', () => {
  process.exit();
});
