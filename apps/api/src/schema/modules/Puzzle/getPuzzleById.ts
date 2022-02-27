import { Id } from '@codeit/core';
import { pipe } from 'fp-ts/lib/function';
import * as TO from 'fp-ts/TaskOption';
import * as TOC from 'fp-ts-contrib/TaskOption';
import { idArg, nonNull, queryField } from 'nexus';

export const getPuzzleById = queryField('getPuzzleById', {
  type: 'Puzzle',
  args: { id: nonNull(idArg()) },
  resolve: (_, { id }, context) =>
    pipe(
      id,
      Id.decode,
      TO.fromEither,
      TO.chain(context.puzzleRepo.getPuzzleById),
      TOC.toNullable,
    )(),
});
