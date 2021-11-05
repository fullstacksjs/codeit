import { objectType } from 'nexus';

export const Puzzle = objectType({
  name: 'Puzzle',
  definition(t) {
    t.nonNull.string('id', { resolve: s => s.id });
    t.nonNull.string('constraint', { resolve: s => s.constraint });
    t.nonNull.string('inputDescription', { resolve: s => s.inputDescription });
    t.nonNull.string('outputDescription', {
      resolve: s => s.outputDescription,
    });
    t.nonNull.string('mode', { resolve: s => s.mode });
    t.nonNull.string('title', { resolve: s => s.title });
  },
});
