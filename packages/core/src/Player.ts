import * as t from 'io-ts';
import * as tt from 'io-ts-types';

import { Username } from './Username';

// TODO: change id types to UUID
export const Player = t.type({
  id: tt.NonEmptyString,
  username: Username,
  displayName: tt.NonEmptyString,
});
