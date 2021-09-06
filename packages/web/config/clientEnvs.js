const clientEnvRegex = /^PUBLIC_URL$|^CLIENT_/i;

const clientEnvs = Object.keys(process.env)
  .filter(key => clientEnvRegex.test(key))
  .reduce(
    (acc, key) => ({
      ...acc,
      [key]: JSON.stringify(process.env[key]),
    }),
    {},
  );

module.exports = clientEnvs;
