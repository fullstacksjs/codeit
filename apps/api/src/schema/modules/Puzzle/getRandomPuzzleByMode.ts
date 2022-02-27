import { pipe } from 'fp-ts/lib/function';
import * as TOC from 'fp-ts-contrib/TaskOption';
import { arg, nonNull, queryField } from 'nexus';

import { PuzzleModeArg } from './PuzzleModeArg';

export const getRandomPuzzleByMode = queryField('getRandomPuzzleByMode', {
  type: 'Puzzle',
  args: { mode: nonNull(arg({ type: PuzzleModeArg })) },
  resolve: (_, { mode }, context) =>
    pipe(context.puzzleRepo.getRandomPuzzleByMode(mode), TOC.toNullable)(),
});
