const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const redirectServedPath = require('react-dev-utils/redirectServedPathMiddleware');
const paths = require('./paths');
const getHttpsConfig = require('./getHttpsConfig');

const host = process.env.HOST ?? '0.0.0.0';

module.exports = {
  disableHostCheck: true,
  allowedHosts: [],
  compress: true,
  clientLogLevel: 'none',
  contentBase: paths.appPublic,
  contentBasePublicPath: paths.publicPath,
  watchContentBase: true,
  hot: true,
  transportMode: 'ws',
  injectClient: false,
  publicPath: paths.publicPath,
  quiet: true,
  watchOptions: {
    ignored: ignoredFiles(paths.appSrc),
  },
  https: getHttpsConfig(),
  host,
  overlay: false,
  historyApiFallback: { disableDotRule: true, index: paths.publicUrlOrPath },
  before(app, server) {
    app.use(evalSourceMapMiddleware(server));
    app.use(errorOverlayMiddleware());
  },
  after(app) {
    app.use(redirectServedPath(paths.publicPath));
    app.use(noopServiceWorkerMiddleware(paths.publicPath));
  },
};
