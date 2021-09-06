const paths = require('./paths');
const getHttpsConfig = require('./getHttpsConfig');
const { getEnv, toInteger } = require('@fullstacksjs/toolbox');

/**
 * @type { import('webpack-dev-server').Configuration }
 */
module.exports = {
  host: getEnv('WEB_HOST', '0.0.0.0'),
  port: toInteger(getEnv('WEB_PORT', 3000)),
  hot: true,
  static: {
    directory: paths.appPublic,
    publicPath: paths.publicPath,
  },
  client: {
    logging: 'none',
  },
  devMiddleware: {
    publicPath: paths.publicPath,
    stats: 'minimal',
  },
  https: getHttpsConfig(),
};
