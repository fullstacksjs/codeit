import { PlayerRepo, PuzzleRepo } from '@codeit/core';

import { PrismaPlayerRepo, PrismaPuzzleRepo } from '../repo';

export interface Context {
  playerRepo: PlayerRepo;
  puzzleRepo: PuzzleRepo;
}

export const createContext = (): Context => ({
  playerRepo: new PrismaPlayerRepo(),
  puzzleRepo: new PrismaPuzzleRepo(),
});
