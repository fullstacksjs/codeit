const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appPackageJson: resolveApp('package.json'),
  appIndexJs: resolveApp('src/index.tsx'),
  appSrc: resolveApp('src'),
  appNodeModules: resolveApp('node_modules'),
  codegenConfig: resolveApp('codegen.yml'),
  publicPath: process.env.PUBLIC_URL ?? '/',
  resolve: resolveApp,
};
