import { Prisma, PrismaClient } from '@prisma/client';

import { sampleClashOfCodePuzzles } from './sampleClashOfCodePuzzles';
import { sampleInOutPuzzles } from './sampleInOutPuzzles';

const prisma = new PrismaClient();

const puzzles: Prisma.PuzzleCreateInput[] = [...sampleClashOfCodePuzzles, ...sampleInOutPuzzles];
export const seedPuzzles = () => Promise.all(puzzles.map(p => prisma.puzzle.create({ data: p })));
