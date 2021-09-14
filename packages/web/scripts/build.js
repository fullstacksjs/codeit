process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const path = require('path');
const chalk = require('react-dev-utils/chalk');
const fs = require('fs-extra');
const webpack = require('webpack');
const printHostingInstructions = require('react-dev-utils/printHostingInstructions');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const printBuildError = require('react-dev-utils/printBuildError');
const paths = require('../config/paths');
const config = require('../config/webpack.config');

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;

const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

async function main() {
  try {
    const previousFileSizes = await measureFileSizesBeforeBuild(paths.appBuild);
    fs.emptyDirSync(paths.appBuild);
    copyPublicFolder();

    const { stats, warnings } = await build();
    if (warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.\n'));
      console.log(warnings.join('\n\n'));
    } else {
      console.log(chalk.green('Compiled successfully.\n'));
    }

    console.log('File sizes after gzip:\n');
    printFileSizesAfterBuild(
      stats,
      previousFileSizes,
      paths.appBuild,
      WARN_AFTER_BUNDLE_GZIP_SIZE,
      WARN_AFTER_CHUNK_GZIP_SIZE,
    );

    console.log();
  } catch (err) {
    const tscCompileOnError = process.env.TSC_COMPILE_ON_ERROR === 'true';
    if (tscCompileOnError) {
      console.log(
        chalk.yellow(
          'Compiled with the following type errors (you may want to check these before deploying your app):\n',
        ),
      );
      printBuildError(err);
    } else {
      console.log(chalk.red('Failed to compile.\n'));
      printBuildError(err);
      process.exit(1);
    }
  }
}

function build() {
  console.log('Creating an optimized production build...');

  const compiler = webpack(config);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) return reject(err);
      const resolveArgs = { stats, warnings: [] };
      return resolve(resolveArgs);
    });
  });
}

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml,
  });
}

main().then(() => {
  const appPackage = require(paths.appPackageJson);
  const publicUrl = paths.publicPath;
  const publicPath = config.output.publicPath;
  const buildFolder = path.relative(process.cwd(), paths.appBuild);
  printHostingInstructions(appPackage, publicUrl, publicPath, buildFolder, false);
});
