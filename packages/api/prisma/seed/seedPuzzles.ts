import { Prisma, PrismaClient } from '@prisma/client';

import { seedingClashOfCodePuzzles } from './clashOfCodePuzzles';
import { seedingPuzzles } from './inOutPuzzles';

const prisma = new PrismaClient();

const puzzles: Prisma.PuzzleCreateInput[] = [...seedingClashOfCodePuzzles, ...seedingPuzzles];
export const seedPuzzles = () => Promise.all(puzzles.map(p => prisma.puzzle.create({ data: p })));
