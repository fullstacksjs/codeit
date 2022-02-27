import { getRequiredEnv } from '@fullstacksjs/toolbox';

export function getSSREnvironment() {
  const graphqlEndpoint: string =
    getRequiredEnv<EnvironmentKey>('NX_API_ENDPOINT');

  return {
    graphqlEndpoint,
  };
}
