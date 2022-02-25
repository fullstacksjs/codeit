import { Title } from '@codeit/core';
import { pipe } from 'fp-ts/lib/function';
import * as TO from 'fp-ts/TaskOption';
import * as TOC from 'fp-ts-contrib/TaskOption';
import { nonNull, queryField, stringArg } from 'nexus';

export const getPuzzleByTitle = queryField('getPuzzleByTitle', {
  type: 'Puzzle',
  args: { title: nonNull(stringArg()) },
  resolve: (_, { title }, context) =>
    pipe(
      title,
      Title.decode,
      TO.fromEither,
      TO.chain(context.puzzleRepo.getPuzzleByTitle),
      TOC.toNullable,
    )(),
});
