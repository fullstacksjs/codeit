import { getClientEnvironment, getSSREnvironment } from '@codeit/environment';
import type { NextPage } from 'next';
import { initUrqlClient, withUrqlClient } from 'next-urql';
import type { Client } from 'urql';

export const initServerSideClient = () =>
  initUrqlClient({ url: getSSREnvironment().graphqlEndpoint }, false) as Client;

export function withGraphQL<T>(page: NextPage<T>) {
  return withUrqlClient(() => ({
    url: getClientEnvironment().graphqlEndpoint,
    requestPolicy: 'cache-and-network',
  }))(page);
}
