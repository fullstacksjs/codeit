/* eslint-disable no-console */
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
require('../config/env');

const path = require('path');
const chalk = require('react-dev-utils/chalk');
const fs = require('fs-extra');
const bfj = require('bfj');
const webpack = require('webpack');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const printHostingInstructions = require('react-dev-utils/printHostingInstructions');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const printBuildError = require('react-dev-utils/printBuildError');
const paths = require('../config/paths');
const config = require('../config/webpack.config');

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;

const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

const argv = process.argv.slice(2);
const writeStatsJson = argv.indexOf('--stats') !== -1;

async function main() {
  try {
    const previousFileSizes = await measureFileSizesBeforeBuild(paths.appBuild);
    fs.emptyDirSync(paths.appBuild);
    copyPublicFolder();

    const { stats, warnings } = await build();
    if (warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.\n'));
      console.log(warnings.join('\n\n'));
      console.log(
        `\nSearch for the ${chalk.underline(
          chalk.yellow('keywords'),
        )} to learn more about each warning.`,
      );
      console.log(
        `To ignore, add ${chalk.cyan('// eslint-disable-next-line')} to the line before.\n`,
      );
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
      // eslint-disable-next-line fp/no-let
      let messages;
      if (err) {
        if (!err.message) return reject(err);

        // eslint-disable-next-line fp/no-let
        let errMessage = err.message;

        // Add additional information for postcss errors
        if (Reflect.hasOwnProperty(err, 'postcssNode')) {
          errMessage += `\nCompileError: Begins at CSS selector ${err.postcssNode.selector}`;
        }
        messages = formatWebpackMessages({ errors: [errMessage], warnings: [] });
      } else {
        messages = formatWebpackMessages(
          stats.toJson({ all: false, warnings: true, errors: true }),
        );
      }
      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join('\n\n')));
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' || process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        console.log(
          chalk.yellow(
            '\nTreating warnings as errors because process.env.CI = true.\n' +
              'Most CI servers set it automatically.\n',
          ),
        );
        return reject(new Error(messages.warnings.join('\n\n')));
      }

      const resolveArgs = { stats, warnings: messages.warnings };

      if (writeStatsJson) {
        return bfj
          .write(`${paths.appBuild}/bundle-stats.json`, stats.toJson())
          .then(() => resolve(resolveArgs))
          .catch(error => reject(new Error(error)));
      }

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
