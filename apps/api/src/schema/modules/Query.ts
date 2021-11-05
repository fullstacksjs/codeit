import { Id, PuzzleMode } from '@codeit/core';
import { pipe } from 'fp-ts/function';
import * as TO from 'fp-ts/TaskOption';
import { toNullable } from 'fp-ts-contrib/TaskOption';
import { arg, idArg, nonNull, queryType } from 'nexus';

import { PuzzleModeArg } from './argTypes';

export const Query = queryType({
  definition(t) {
    t.field('player', {
      type: 'Player',
      args: {
        id: nonNull(idArg()),
      },
      resolve: (_, { id }, context) =>
        pipe(
          id,
          Id.decode,
          TO.fromEither,
          TO.chain(context.playerRepo.getPlayerById),
          toNullable,
        )(),
    });
    t.field('puzzle', {
      type: 'Puzzle',
      args: {
        mode: nonNull(arg({ type: PuzzleModeArg })),
      },
      resolve: (_, { mode }, context) =>
        pipe(
          mode,
          PuzzleMode.decode,
          TO.fromEither,
          TO.chain(context.puzzleRepo.getRandomPuzzleByMode),
          toNullable,
        )(),
    });
  },
});
