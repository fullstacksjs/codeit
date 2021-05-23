const clientEnvRegex = /^CLIENT_/i;

const clientEnvs = Object.keys(process.env)
  .filter(key => clientEnvRegex.test(key))
  .reduce((acc, key) => ({ ...acc, [key]: process.env[key] }), {});

module.exports = clientEnvs;
