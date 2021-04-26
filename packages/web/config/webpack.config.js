const path = require('path');
const { env } = require('@frontendmonster/utils');
const { HotModuleReplacementPlugin, EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const TerserPlugin = require('terser-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const webpackDevClientEntry = require.resolve('react-dev-utils/webpackHotDevClient');
const reactRefreshOverlayEntry = require.resolve('react-dev-utils/refreshOverlayInterop');

const ManifestPlugin = require('webpack-manifest-plugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const clientEnv = require('./env');
const paths = require('./paths');

const { isProd, isDev } = env;
const isProfile = isProd && false;
const sourceMap = false;

const terser = new TerserPlugin({
  terserOptions: {
    parse: { ecma: 8 },
    compress: {
      ecma: 5,
      warnings: false,
      comparisons: false,
      inline: 2,
    },
    mangle: { safari10: true },
    keep_classnames: isProfile,
    keep_fnames: isProfile,
    output: {
      ecma: 5,
      comments: false,
      ascii_only: true,
    },
  },
  sourceMap,
});

const shouldInlineRuntimeChunk = true;

const config = {
  mode: isProd ? 'production' : 'development',
  bail: isProd,
  devtool: isProd ? 'source-map' : 'cheap-module-source-map',
  entry: paths.appIndexJs,

  output: {
    path: isProd ? paths.appBuild : undefined,
    pathinfo: isDev,
    filename: isProd ? 'static/js/[name].[contenthash:8].js' : isDev && 'static/js/bundle.js',
    futureEmitAssets: true,
    chunkFilename: isProd
      ? 'static/js/[name].[contenthash:8].chunk.js'
      : isDev && 'static/js/[name].chunk.js',
    publicPath: paths.publicPath,
    devtoolModuleFilenameTemplate: isProd
      ? info => path.relative(paths.appSrc, info.absoluteResourcePath).replace(/\\/g, '/')
      : isDev && (info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
    globalObject: 'this',
  },

  optimization: {
    minimize: isProd,
    minimizer: [terser],
    splitChunks: { chunks: 'all', name: isDev },
    runtimeChunk: { name: entrypoint => `runtime-${entrypoint.name}` },
  },

  resolve: {
    modules: ['node_modules', paths.appSrc, paths.appNodeModules],
    extensions: ['.mjs', '.js', '.ts', '.tsx', '.json', '.jsx'],
    alias: {
      ...(isProfile && {
        'react-dom$': 'react-dom/profiling',
        'scheduler/tracing': 'scheduler/tracing-profiling',
      }),
    },
  },

  module: {
    strictExportPresence: true,
    rules: [
      { parser: { requireEnsure: false } },
      {
        oneOf: [
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve('babel-preset-react-app/webpack-overrides'),
              presets: [[require.resolve('babel-preset-react-app'), { runtime: 'automatic' }]],
              plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
              cacheDirectory: true,
              cacheCompression: false,
              compact: isProd,
            },
          },
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: require.resolve('babel-loader'),
            options: {
              babelrc: false,
              configFile: false,
              compact: false,
              presets: [
                [require.resolve('babel-preset-react-app/dependencies'), { helpers: true }],
              ],
              cacheDirectory: true,
              cacheCompression: false,
              sourceMaps: sourceMap,
              inputSourceMap: sourceMap,
            },
          },
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.(js|mjs|jsx|ts|tsx|html|json|css)$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
        removeRedundantAttributes: isProd,
        useShortDoctype: isProd,
        removeEmptyAttributes: isProd,
        removeStyleLinkTypeAttributes: isProd,
        keepClosingSlash: isProd,
        minifyJS: isProd,
        minifyCSS: isProd,
        minifyURLs: isProd,
      },
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, clientEnv),
    isProd &&
      shouldInlineRuntimeChunk &&
      new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime-.+[.]js/]),
    new ModuleNotFoundPlugin(paths.appPath),
    new EnvironmentPlugin(Object.keys(clientEnv)),
    isDev && new HotModuleReplacementPlugin(),
    isDev &&
      new ReactRefreshWebpackPlugin({
        overlay: {
          entry: webpackDevClientEntry,
          // The expected exports are slightly different from what the overlay exports,
          // so an interop is included here to enable feedback on module-level errors.
          module: reactRefreshOverlayEntry,
          // Since we ship a custom dev client and overlay integration,
          // the bundled socket handling logic can be eliminated.
          sockIntegration: false,
        },
      }),
    isDev && new CaseSensitivePathsPlugin(),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: paths.publicPath,
      generate: (seed, files, entrypoints) => {
        const manifestFiles = files.reduce(
          (manifest, file) => ({ ...manifest, [file.name]: file.path }),
          seed,
        );
        const entrypointFiles = entrypoints.main.filter(fileName => !fileName.endsWith('.map'));
        return { files: manifestFiles, entrypoints: entrypointFiles };
      },
    }),
  ].filter(Boolean),

  node: {
    module: 'empty',
    dgram: 'empty',
    dns: 'mock',
    fs: 'empty',
    http2: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: false,
};

module.exports = config;
