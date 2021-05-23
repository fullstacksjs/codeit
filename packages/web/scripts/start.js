require('./init');

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const chalk = require('chalk');
const config = require('../config/webpack.config');
const devServerConfig = require('../config/webpackDevServer.config');
const DevServer = require('./DevServer');

function start() {
  return new DevServer(config, devServerConfig).listen();
}

start()
  .then(() => {
    console.log(chalk.cyan('Starting the development server...\n'));
  })
  .catch(err => {
    console.error(err.message);
    process.exit(1);
  });
