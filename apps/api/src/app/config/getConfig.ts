import { getRequiredEnv, toInteger } from '@fullstacksjs/toolbox';

export interface Config {
  port: number;
}

export function getConfig(): Config {
  return {
    port: toInteger(getRequiredEnv('API_PORT')),
  };
}
