import { getRequiredEnv, toInteger } from '@fullstacksjs/toolbox';

export const getConfig = (): Config => ({
  port: toInteger(getRequiredEnv('API_PORT')),
});
