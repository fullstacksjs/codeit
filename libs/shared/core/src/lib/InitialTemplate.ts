import * as t from 'io-ts';

import { Language } from './Language';

export const InitialTemplate = t.type({
  language: Language,
  template: t.string,
});
