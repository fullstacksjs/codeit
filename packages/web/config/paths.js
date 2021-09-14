const path = require('path');
const fs = require('fs');
const { getEnv } = require('@fullstacksjs/toolbox');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appPublic: resolveApp('public'),
  appSrc: resolveApp('src'),
  appHtml: resolveApp('public/index.html'),
  appEntrypoint: resolveApp('src/index.tsx'),
  publicPath: getEnv('PUBLIC_URL', '/'),
  appPackageJson: resolveApp('package.json'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
};
