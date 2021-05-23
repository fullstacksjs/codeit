/* eslint-disable camelcase */
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { Env } = require('@fullstacksjs/toolbox');
const { EnvironmentPlugin, HotModuleReplacementPlugin } = require('webpack');
const clientEnvs = require('./clientEnvs');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const paths = require('./paths');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const isProfile = false;

const config = {
  mode: Env.isProd ? 'production' : 'development',
  bail: Env.isProd,
  devtool: Env.isProd ? 'source-map' : 'cheap-module-source-map',
  entry: paths.appEntrypoint,

  output: {
    path: Env.isProd ? paths.appBuild : undefined,
    filename: Env.isProd ? 'static/js/[name].[contenthash:8].js' : 'static/js/[name].js',
    chunkFilename: Env.isProd
      ? 'static/js/[name].[contenthash:8].chunk.js'
      : 'static/js/[name].chunk.js',
    publicPath: paths.publicPath,
    devtoolModuleFilenameTemplate: Env.isProd
      ? info => path.relative(paths.appSrc, info.absoluteResourcePath).replace(/\\/g, '/')
      : info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    globalObject: 'this',
  },

  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(ts|tsx)$/,
            include: paths.appSrc,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: Env.isDev,
                cacheCompression: false,
                compact: Env.isProd,
              },
            },
          },
        ],
      },
    ],
  },

  optimization: {
    minimize: Env.isProd,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          mangle: { safari10: true },
          keep_classnames: isProfile,
          keep_fnames: isProfile,
          sourceMap: true,
        },
      }),
    ],
    splitChunks: { chunks: 'all' },
    runtimeChunk: { name: entrypoint => `runtime-${entrypoint.name}` },
  },

  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.tsx', '.json', '.jsx'],
    alias: {
      ...(isProfile && {
        'react-dom$': 'react-dom/profiling',
        'scheduler/tracing': 'scheduler/tracing-profiling',
      }),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      inject: true,
      minify: {
        removeComments: Env.isProd,
        collapseWhitespace: Env.isProd,
        removeRedundantAttributes: Env.isProd,
        useShortDoctype: Env.isProd,
        removeEmptyAttributes: Env.isProd,
        removeStyleLinkTypeAttributes: Env.isProd,
        keepClosingSlash: Env.isProd,
        minifyJS: Env.isProd,
        minifyCSS: Env.isProd,
        minifyURLs: Env.isProd,
      },
    }),
    new EnvironmentPlugin(Object.keys(clientEnvs)),
    Env.isDev && new HotModuleReplacementPlugin(),
    Env.isDev && new ReactRefreshWebpackPlugin(),
    Env.isDev && new CaseSensitivePathsPlugin(),
  ].filter(Boolean),
};

module.exports = config;
