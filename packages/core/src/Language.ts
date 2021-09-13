import * as t from 'io-ts';

export const Language = t.union([
  t.literal('TypeScript'),
  t.literal('JavaScript'),
  t.literal('Haskell'),
  t.literal('Java'),
  t.literal('C++'),
  t.literal('C#'),
  t.literal('F#'),
  t.literal('Go'),
  t.literal('C'),
]);

export type Language = t.TypeOf<typeof Language>;
