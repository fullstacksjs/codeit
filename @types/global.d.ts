type NodeEnv = import('@fullstacksjs/toolbox').NodeEnv;
type EnvironmentVariable = import('@fullstacksjs/toolbox').EnvironmentVariable;
type SSRData = import('@urql/core/dist/types/exchanges/ssr').SSRData;

declare const process: {
  env: {
    NODE_ENV: NodeEnv;
    API_PORT: EnvironmentVariable;
    DATABASE_URI: EnvironmentVariable;
    NX_API_ENDPOINT: EnvironmentVariable;
  };
};

type EnvironmentKey = keyof typeof process.env;

interface Window {
  __URQL_DATA__: SSRData;
}
