import { objectType } from 'nexus';

export const Player = objectType({
  name: 'Player',
  sourceType: {
    module: require.resolve('@prisma/client'),
    export: 'Player',
  },
  definition(t) {
    t.string('id', { resolve: s => s.id });
    t.string('displayName', { resolve: s => s.displayName });
    t.string('email', { resolve: s => s.email });
    t.string('username', { resolve: s => s.username });
  },
});
