import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const players: Prisma.PlayerCreateInput[] = [
  { displayName: 'Alireza', email: 'abcdefg@gmail.com', username: 's_kill' },
  { displayName: 'Amirabbas', email: 'abcdefghi@gmail.com', username: 'AmirabbasJ' },
  { displayName: 'Mohammad', email: 'mh2021@gmail.com', username: 'Mamamd' },
  { displayName: 'Hossein', email: 'Hs@gmail.com', username: 'Hossein_coder' },
];

export const seedPlayers = () => prisma.player.createMany({ data: players });
