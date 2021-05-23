const { toInteger, getEnv } = require('@fullstacksjs/toolbox');
const paths = require('./paths');

const port = toInteger(getEnv('WEB_PORT', 3000));
const host = getEnv('WEB_HOST', '0.0.0.0');

module.exports = {
  contentBase: paths.appPublic,
  contentBasePublicPath: paths.publicPath,
  host,
  hot: true,
  port,
  publicPath: paths.publicPath,
  watchContentBase: true,
};
