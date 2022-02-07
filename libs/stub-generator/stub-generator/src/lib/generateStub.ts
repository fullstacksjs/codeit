import type { Language } from '@codeit/core';
import { Languages } from '@codeit/core';
import { generateJavascriptStub } from '@codeit/stub-generator/parser-javascript';
import { parseSyntax } from '@codeit/stub-generator/utils-syntax-parser';
import { pipe } from 'fp-ts/lib/function';
import { match } from 'ts-pattern';

export const generateStub = (language: Language, syntax: string): string =>
  pipe(syntax, parseSyntax, s =>
    match(language)
      .with(Languages.JavaScript, () => generateJavascriptStub(s))
      .otherwise(() => ''),
  );
