import { objectType } from 'nexus';

export const Player = objectType({
  name: 'Player',
  definition(t) {
    t.nonNull.id('id', { resolve: s => s.id });
    t.nonNull.string('displayName', { resolve: s => s.displayName });
    t.nonNull.string('email', { resolve: s => s.email });
    t.nonNull.string('username', { resolve: s => s.username });
  },
});
