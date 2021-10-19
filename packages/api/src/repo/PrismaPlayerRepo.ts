import { Id, Player, PlayerRepo } from '@codeit/core';
import { flow, pipe } from 'fp-ts/function';
import * as TO from 'fp-ts/TaskOption';

import { PrismaClient } from '.prisma/client';

export class PrismaPlayerRepo implements PlayerRepo {
  constructor(private client = new PrismaClient().player) {}

  getPlayerById = (id: Id): TO.TaskOption<Player> =>
    pipe(
      TO.tryCatch(() => this.client.findFirst({ where: { id } })),
      TO.chain(TO.fromNullable),
      TO.chain(flow(Player.decode, TO.fromEither)),
    );
}
