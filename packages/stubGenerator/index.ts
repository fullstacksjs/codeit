import { Language } from '@codeit/core';
import { pipe } from 'fp-ts/lib/function';
import { match } from 'ts-pattern';

import { generateJavascriptStub } from './javascript';
import { parseSyntax } from './syntaxParser/parseSyntax';

export const generateStub = (language: Language, syntax: string): string =>
  pipe(syntax, parseSyntax, s =>
    match(language)
      .with('JavaScript', () => generateJavascriptStub(s))
      .otherwise(() => ''),
  );
