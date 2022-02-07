import type { Express } from 'express';
import express from 'express';

import { createContext, createSchema } from '../schema';
import { createHelixMiddleware } from './createHelixMiddleware';

const mkListen = (app: Express) => (port: Port) =>
  new Promise<Port>(resolve => {
    app.listen(port, () => resolve(port));
  });

export const createApp = (): App => {
  const app = express();
  app.use(express.json());
  app.use(
    '/graphql',
    createHelixMiddleware({
      schema: createSchema(),
      contextFactory: createContext,
    }),
  );
  return { listen: mkListen(app) };
};
