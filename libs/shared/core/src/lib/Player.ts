import * as t from 'io-ts';
import * as tt from 'io-ts-types';

import { Email } from './Email';
import { Id } from './Id';
import { Username } from './Username';

export const Player = t.type({
  id: Id,
  username: Username,
  email: Email,
  displayName: tt.NonEmptyString,
});

export type Player = t.TypeOf<typeof Player>;
