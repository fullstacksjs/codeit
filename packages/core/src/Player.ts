import * as t from 'io-ts';
import * as tt from 'io-ts-types';

import { Id } from './Id';
import { Username } from './Username';

export const Player = t.type({
  id: Id,
  username: Username,
  displayName: tt.NonEmptyString,
});
