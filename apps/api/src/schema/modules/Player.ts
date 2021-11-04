import { objectType } from 'nexus';

export const Player = objectType({
  name: 'Player',
  sourceType: {
    module: require.resolve('@prisma/client'),
    export: 'Player',
  },
  definition(t) {
    t.nonNull.string('id', { resolve: s => s.id });
    t.nonNull.string('displayName', { resolve: s => s.displayName });
    t.nonNull.string('email', { resolve: s => s.email });
    t.nonNull.string('username', { resolve: s => s.username });
  },
});
