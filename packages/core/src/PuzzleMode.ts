import * as t from 'io-ts';

export const PuzzleMode = t.union([t.literal('normal'), t.literal('reverse')]);
