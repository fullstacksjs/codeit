import { makeSchema } from 'nexus';
import { resolve } from 'path';

import * as types from './modules';

export const createSchema = () =>
  makeSchema({
    types,
    outputs: {
      schema: false,
      typegen: resolve(__dirname, '../../node_modules/@types/nexus-typegen/index.d.ts'),
    },
    contextType: {
      module: require.resolve('./createContext.ts'),
      export: 'Context',
      alias: 'Context',
    },
  });

createSchema();
