import type { VarType } from '@codeit/core';
import { pipe } from 'fp-ts/lib/function';
import * as R from 'ramda';

import type { RawVariable } from './type';

export const eliminateConstrains = ([name, type]: RawVariable): RawVariable => [
  name,
  pipe(type, R.split('('), R.head) as VarType,
];
