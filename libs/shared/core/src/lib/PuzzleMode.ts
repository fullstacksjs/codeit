import * as t from 'io-ts';

export enum PuzzleModes {
  normal = 'normal',
  reverse = 'reverse',
}
export const PuzzleMode = t.union([
  t.literal(PuzzleModes.normal),
  t.literal(PuzzleModes.reverse),
]);
export type PuzzleMode = t.TypeOf<typeof PuzzleMode>;
