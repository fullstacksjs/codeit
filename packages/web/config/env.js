const paths = require('./paths');

const clientEnvRegex = /^CLIENT_/i;

const envs = Object.keys(process.env)
  .filter((key) => clientEnvRegex.test(key))
  .reduce((acc, key) => ({ ...acc, [key]: process.env[key] }), {
    PUBLIC_URL: paths.publicPath,
  });

module.exports = envs;
