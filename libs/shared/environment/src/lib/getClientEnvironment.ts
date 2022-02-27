import { required } from '@fullstacksjs/toolbox';

export function getClientEnvironment() {
  const apiEndpoint = process.env['NX_API_ENDPOINT'];
  const graphqlEndpoint: string = required(apiEndpoint, 'apiEndpoint');

  return {
    graphqlEndpoint,
  };
}
