import { Prisma } from '@prisma/client';

export const samplePlayers: Prisma.PlayerCreateInput[] = [
  { displayName: 'Alireza', email: 'abcdefg@gmail.com', username: 's_kill' },
  { displayName: 'Amirabbas', email: 'abcdefghi@gmail.com', username: 'AmirabbasJ' },
  { displayName: 'Mohammad', email: 'mh2021@gmail.com', username: 'Mamamd' },
  { displayName: 'Hossein', email: 'Hs@gmail.com', username: 'Hossein_coder' },
];
