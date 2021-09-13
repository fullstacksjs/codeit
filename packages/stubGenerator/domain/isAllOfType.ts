import * as R from 'ramda';

import { VarType } from '../../core';

export const isAllOfType = (type: VarType) =>
  R.pipe(
    R.map((x: string[]) => R.last(x) as VarType),
    R.all(R.equals(type)),
  );
