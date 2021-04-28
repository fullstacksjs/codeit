import * as t from 'io-ts';
import * as tt from 'io-ts-types';

export const Solution = t.type({
  playerId: tt.NonEmptyString,
  puzzleId: tt.NonEmptyString,
  code: tt.NonEmptyString,
});
