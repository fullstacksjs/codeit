import { Id, Puzzle, PuzzleRepo, Title } from '@codeit/core';
import { randomInt } from '@fullstacksjs/toolbox';
import { flow, pipe } from 'fp-ts/function';
import * as TO from 'fp-ts/TaskOption';

import { PrismaClient, PuzzleMode } from '.prisma/client';

export class PrismaPuzzleRepo implements PuzzleRepo {
  constructor(private client = new PrismaClient().puzzle) {}

  getPuzzleById = (id: Id): TO.TaskOption<Puzzle> =>
    pipe(
      TO.tryCatch(() => this.client.findFirst({ where: { id } })),
      TO.chain(TO.fromNullable),
      TO.chain(flow(Puzzle.decode, TO.fromEither)),
    );

  getPuzzleByTitle = (title: Title): TO.TaskOption<Puzzle> =>
    pipe(
      TO.tryCatch(() => this.client.findFirst({ where: { title } })),
      TO.chain(TO.fromNullable),
      TO.chain(flow(Puzzle.decode, TO.fromEither)),
    );

  getRandomPuzzleByMode = (mode: PuzzleMode): TO.TaskOption<Puzzle> =>
    pipe(
      TO.tryCatch(() => this.client.count()),
      TO.map(max => randomInt({ min: 0, max })),
      TO.chain(skip => TO.tryCatch(() => this.client.findFirst({ where: { mode }, skip }))),
      TO.chain(TO.fromNullable),
      TO.chain(flow(Puzzle.decode, TO.fromEither)),
    );

  getRandomPuzzle = (): TO.TaskOption<Puzzle> =>
    pipe(
      TO.tryCatch(() => this.client.count()),
      TO.map(max => randomInt({ min: 0, max })),
      TO.chain(skip => TO.tryCatch(() => this.client.findFirst({ skip }))),
      TO.chain(TO.fromNullable),
      TO.chain(flow(Puzzle.decode, TO.fromEither)),
    );
}