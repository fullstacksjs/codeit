import { pipe } from 'fp-ts/lib/function';
import * as TOC from 'fp-ts-contrib/TaskOption';
import { queryField } from 'nexus';

export const getRandomPuzzle = queryField('getRandomPuzzle', {
  type: 'Puzzle',
  resolve: (_, __, context) =>
    pipe(context.puzzleRepo.getRandomPuzzle(), TOC.toNullable)(),
});
