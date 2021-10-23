import { Id, Title } from '@codeit/core';
import { fail } from 'assert';
import { pipe } from 'fp-ts/lib/function';
import * as TO from 'fp-ts/TaskOption';

import { sampleInOutPuzzles } from '../prisma/seed/sampleInOutPuzzles';
import { seedPuzzles } from '../prisma/seed/seedPuzzles';
import { PrismaPuzzleRepo } from '../src/repo';
import { PrismaClient } from '.prisma/client';

describe('prismaPuzzleRepo', () => {
  const puzzleRepo = new PrismaPuzzleRepo();
  const client = new PrismaClient();
  const [, sample] = sampleInOutPuzzles;

  beforeAll(() => seedPuzzles());
  afterAll(() => client.$disconnect());
  it(
    'should find by id',
    pipe(
      TO.tryCatch(() => client.puzzle.findFirst({ where: { title: sample?.title } })),
      TO.chain(TO.fromNullable),
      TO.chain(({ id }) => puzzleRepo.getPuzzleById(id as Id)),
      TO.match(fail, puzzle => expect(puzzle.statement).toEqual(sample?.statement)),
    ),
  );
  it(
    'should find by title',
    pipe(
      puzzleRepo.getPuzzleByTitle(sample?.title as Title),
      TO.match(fail, puzzle => expect(puzzle.inputDescription).toEqual(sample?.inputDescription)),
    ),
  );

  it(
    'should find random normal puzzle by mode',
    pipe(
      puzzleRepo.getRandomPuzzleByMode('normal'),
      TO.match(fail, puzzle => expect(puzzle.mode).toEqual('normal')),
    ),
  );

  it(
    'should find random reverse puzzle by mode',
    pipe(
      puzzleRepo.getRandomPuzzleByMode('reverse'),
      TO.match(fail, puzzle => expect(puzzle.mode).toEqual('reverse')),
    ),
  );

  it(
    'should find random puzzle',
    pipe(
      puzzleRepo.getRandomPuzzle(),
      TO.match(fail, puzzle => expect(puzzle).toBeDefined()),
    ),
  );
});
