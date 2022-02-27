import { getRequiredEnv, toInteger } from '@fullstacksjs/toolbox';

export function getApiEnvironment() {
  const databaseUri = getRequiredEnv<EnvironmentKey>('DATABASE_URI');
  const port = toInteger(getRequiredEnv<EnvironmentKey>('API_PORT'));

  return {
    databaseUri,
    port,
  };
}
