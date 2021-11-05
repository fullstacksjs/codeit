import { makeSchema } from 'nexus';
import { resolve } from 'path';

import * as types from './modules';

export const createSchema = () =>
  makeSchema({
    types,
    outputs: {
      schema: false,
      typegen: resolve(
        process.cwd(),
        'node_modules/@types/nexus-typegen/index.d.ts',
      ),
    },
    sourceTypes: {
      debug: true,
      modules: [
        {
          module: resolve(process.cwd(), './libs/shared/core/src/index.ts'),
          typeMatch: type => [new RegExp(`(${type.name}.ts)`)],
          alias: 'core',
        },
      ],
      mapping: {
        Puzzle: 'core.Puzzle',
        Player: 'core.Player',
      },
    },

    contextType: {
      module: resolve(process.cwd(), 'apps/api/src/schema/createContext.ts'),
      export: 'Context',
      alias: 'Context',
    },
  });

if (require.main === module) {
  console.log('dev schema created');
  createSchema();
}
