import { pipe } from 'fp-ts/lib/function';
import * as R from 'ramda';

import { VarType } from '../../core';

export const eliminateConstrains = ([name, type]: [string, string]): [string, string] => [
  name,
  pipe(type, R.split('('), R.head) as VarType,
];
