import type { Id } from '@codeit/core';
import { noop } from '@fullstacksjs/toolbox';
import { PrismaClient } from '@prisma/client';
import { fail } from 'assert';
import { pipe } from 'fp-ts/lib/function';
import * as TO from 'fp-ts/TaskOption';

import { seedPlayers } from '../../prisma/seed/seedPlayers';
import { PrismaPlayerRepo } from '../../src/repo';

describe('prismaPlayerRepo', () => {
  const playerRepo = new PrismaPlayerRepo();
  const client = new PrismaClient();

  beforeEach(async () => {
    await client.player.deleteMany();
    await seedPlayers();
  });
  afterAll(() => client.$disconnect());
  it(
    'should find by id',
    pipe(
      TO.tryCatch(client.player.findFirst),
      TO.chain(TO.fromNullable),
      TO.chain(({ id }) => playerRepo.getPlayerById(id as Id)),
      TO.match(fail, player => expect(player.username).toBe('s_kill')),
    ),
  );

  it(
    "should not find by id when id doesn't exist",
    pipe(
      playerRepo.getPlayerById('bad id' as Id),
      TO.match(noop, () => fail('a player was found')),
    ),
  );
});
