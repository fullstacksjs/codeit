import { objectType } from 'nexus';

export const TestCase = objectType({
  name: 'TestCase',
  definition(t) {
    t.nonNull.string('title', { resolve: s => s.title });
    t.nonNull.string('input', { resolve: s => s.input });
    t.nonNull.string('mode', { resolve: s => s.mode });
  },
});
