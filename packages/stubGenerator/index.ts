import { match } from 'ts-pattern';

import { Language } from '../core';
import { generateJavascriptStub } from './languages/javascript/src';

export const generateStub = (language: Language, syntax: string): string =>
  match(language)
    .with('JavaScript', () => generateJavascriptStub(syntax))
    // .with('TypeScript', () => generateJavascriptStub(syntax)) this would work too
    // .with('F#', () => fsharpGenerate(syntax))
    // .with('Go', () => goGenerate(syntax))
    .otherwise(() => '');
