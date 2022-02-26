import { arg, nonNull, objectType } from 'nexus';

import { LanguageArg } from '../types';

export const Puzzle = objectType({
  name: 'Puzzle',
  definition(t) {
    t.nonNull.id('id', { resolve: s => s.id });
    t.nonNull.string('constraint', { resolve: s => s.constraint });
    t.nonNull.string('inputDescription', { resolve: s => s.inputDescription });
    t.nonNull.string('outputDescription', {
      resolve: s => s.outputDescription,
    });
    t.nonNull.string('mode', { resolve: s => s.mode });
    t.nonNull.string('title', { resolve: s => s.title });
    t.nonNull.list.field('testCases', {
      type: 'TestCase',
      resolve: s => s.testCases.filter(({ mode }) => mode === 'sample'),
    });
    t.nonNull.string('initialTemplate', {
      args: { language: nonNull(arg({ type: LanguageArg })) },
      resolve: (src, { language }) =>
        src.initialTemplates.find(({ language: lang }) => lang === language)
          ?.template ?? '',
    });
  },
});
