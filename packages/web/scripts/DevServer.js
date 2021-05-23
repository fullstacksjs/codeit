const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

class DevServer {
  injected = false;

  constructor(webpackConfig, config) {
    this.config = config;
    const compiler = webpack(webpackConfig);
    this.server = new WebpackDevServer(compiler, config);
  }

  kill() {
    this.server.close();
  }

  addHandler() {
    if (this.injected) return;

    process.on('SIGINT', this.kill.bind(this));
    process.on('SIGTERM', this.kill.bind(this));
    if (process.env.CI !== 'true') {
      process.stdin.on('end', this.kill.bind(this));
    }

    this.injected = true;
  }

  listen() {
    this.addHandler();
    const { port, host } = this.config;
    return new Promise((resolve, reject) => {
      this.server.listen(port, host, err => {
        err ? reject(err) : resolve({ host, port });
      });
    });
  }
}

module.exports = DevServer;
