import { VarType } from '@codeit/core';
import * as R from 'ramda';

export const isAllOfType = (type: VarType) =>
  R.pipe(
    R.map((x: string[]) => R.last(x) as VarType),
    R.all(R.equals(type)),
  );
