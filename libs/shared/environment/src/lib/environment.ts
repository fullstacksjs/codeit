import type { EnvironmentVariable, NodeEnv } from '@fullstacksjs/toolbox';
import { getRequiredEnv, toInteger } from '@fullstacksjs/toolbox';

declare const process: {
  env: {
    NODE_ENV: NodeEnv<'development' | 'production' | 'test'>;
    API_PORT: EnvironmentVariable;
    DATABASE_URI: EnvironmentVariable;
  };
};

type EnvironmentKey = keyof typeof process.env;

export const databaseUri = getRequiredEnv<EnvironmentKey>('DATABASE_URI');
export const apiPort = toInteger(getRequiredEnv<EnvironmentKey>('API_PORT'));
