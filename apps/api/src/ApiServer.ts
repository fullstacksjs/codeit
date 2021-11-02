import { ApolloServer } from 'apollo-server';

import { Config } from './config/getConfig';
import { createSchema } from './schema';
import { createContext } from './schema/createContext';

export function ApiServer(_config: Config) {
  const apolloServer = new ApolloServer({
    schema: createSchema(),
    context: createContext(),
  });
  return apolloServer;
}
