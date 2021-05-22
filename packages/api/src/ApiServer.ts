import { ApolloServer } from 'apollo-server';

import { Config } from './config/getConfig';
import { createSchema } from './schema';

export function ApiServer(_config: Config) {
  const apolloServer = new ApolloServer({ schema: createSchema() });
  return apolloServer;
}
