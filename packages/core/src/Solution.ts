import * as t from 'io-ts';
import * as tt from 'io-ts-types';

import { Id } from './Id';
import { Language } from './Language';

export const Solution = t.type({
  playerId: Id,
  puzzleId: Id,
  code: tt.NonEmptyString,
  language: Language,
});
export type Solution = t.TypeOf<typeof Solution>;
