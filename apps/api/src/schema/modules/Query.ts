import { Id, Title } from '@codeit/core';
import { pipe } from 'fp-ts/function';
import * as TO from 'fp-ts/TaskOption';
import { toNullable } from 'fp-ts-contrib/TaskOption';
import { arg, idArg, nonNull, queryType, stringArg } from 'nexus';

import { PuzzleModeArg } from './argTypes';

export const Query = queryType({
  definition(t) {
    t.field('getPlayerById', {
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
    t.field('getRandomPuzzle', {
      type: 'Puzzle',
      resolve: (_, __, context) =>
        pipe(context.puzzleRepo.getRandomPuzzle(), toNullable)(),
    });
    t.field('getPuzzleByTitle', {
      type: 'Puzzle',
      args: {
        title: nonNull(stringArg()),
      },
      resolve: (_, { title }, context) =>
        pipe(
          title,
          Title.decode,
          TO.fromEither,
          TO.chain(context.puzzleRepo.getPuzzleByTitle),
          toNullable,
        )(),
    });
    t.field('getRandomPuzzleByMode', {
      type: 'Puzzle',
      args: {
        mode: nonNull(arg({ type: PuzzleModeArg })),
      },
      resolve: (_, { mode }, context) =>
        pipe(context.puzzleRepo.getRandomPuzzleByMode(mode), toNullable)(),
    });
    t.field('getPuzzleById', {
      type: 'Puzzle',
      args: {
        id: nonNull(idArg()),
      },
      resolve: (_, { id }, context) =>
        pipe(
          id,
          Id.decode,
          TO.fromEither,
          TO.chain(context.puzzleRepo.getPuzzleById),
          toNullable,
        )(),
    });
  },
});
