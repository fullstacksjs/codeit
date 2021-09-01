import { match } from 'ts-pattern';

import { Language } from '../core';
import { generateJavascriptStub } from './languages/javascript/src';

export const generateStub = (syntax: string, language: Language): string =>
  match(language)
    .with('JavaScript', () => generateJavascriptStub(syntax))
    .with('TypeScript', () => generateJavascriptStub(syntax))
    // .with('F#', () => fsharpGenerate(syntax))
    // .with('Go', () => goGenerate(syntax))
    .otherwise(() => '');
