import { match } from 'ts-pattern';

import { Language } from '../core';
import { generateJavascriptStub } from './javascript';

export const generateStub = (language: Language, syntax: string): string =>
  match(language)
    .with('JavaScript', () => generateJavascriptStub(syntax))
    .otherwise(() => '');
