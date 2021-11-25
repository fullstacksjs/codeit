import * as t from 'io-ts';

export enum Languages {
  TypeScript = 'TypeScript',
  JavaScript = 'JavaScript',
  Haskell = 'Haskell',
  Csharp = 'Csharp',
  Fsharp = 'Fsharp',
  Python = 'Python',
  Ruby = 'Ruby',
  Rust = 'Rust',
  Java = 'Java',
  Cpp = 'Cpp',
  Lua = 'Lua',
  Php = 'Php',
  Go = 'Go',
  C = 'C',
}

export const Language = t.union([
  t.literal(Languages.TypeScript),
  t.literal(Languages.JavaScript),
  t.literal(Languages.Haskell),
  t.literal(Languages.Csharp),
  t.literal(Languages.Fsharp),
  t.literal(Languages.Python),
  t.literal(Languages.Ruby),
  t.literal(Languages.Rust),
  t.literal(Languages.Java),
  t.literal(Languages.Cpp),
  t.literal(Languages.Lua),
  t.literal(Languages.Php),
  t.literal(Languages.Go),
  t.literal(Languages.C),
]);

export type Language = t.TypeOf<typeof Language>;
