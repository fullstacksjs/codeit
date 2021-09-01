import * as R from 'ramda';

export type VarType = 'float' | 'int' | 'string' | 'word';

export const isAllOfType = (type: VarType) =>
  R.pipe(
    R.map((x: string[]) => R.last(x) as VarType),
    R.all(R.equals(type)),
  );

export const replaceLongsWithInt = ([name, type]: string[]) =>
  type === 'long' ? [name, 'int'] : [name, type];

export const eliminateConstrains = ([name, type]: string[]) => [
  name,
  R.pipe(R.split('('), R.head)(type) as string,
];
