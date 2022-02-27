import { getClientEnvironment } from '@codeit/environment';
import { createClient } from '@urql/core';

export const graphqlClient = createClient({
  url: getClientEnvironment().graphqlEndpoint,
});
