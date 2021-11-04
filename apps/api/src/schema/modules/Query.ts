import { Id } from '@codeit/core';
import { pipe } from 'fp-ts/function';
import * as TO from 'fp-ts/TaskOption';
import { toNullable } from 'fp-ts-contrib/TaskOption';
import { idArg, nonNull, queryType } from 'nexus';

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
  },
});
