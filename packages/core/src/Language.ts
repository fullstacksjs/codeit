import * as t from 'io-ts';

export const Language = t.union([
  t.literal('TypeScript'),
  t.literal('JavaScript'),
  t.literal('Haskell'),
  t.literal('Python'),
  t.literal('Ruby'),
  t.literal('Rust'),
  t.literal('Java'),
  t.literal('Lua'),
  t.literal('PHP'),
  t.literal('C++'),
  t.literal('C#'),
  t.literal('F#'),
  t.literal('Go'),
  t.literal('C'),
]);

export type Language = t.TypeOf<typeof Language>;
