import { PrismaClient } from '@prisma/client';

import { samplePlayers } from './samplePlayers';

const prisma = new PrismaClient();

export const seedPlayers = () =>
  prisma.player.createMany({ data: samplePlayers });
