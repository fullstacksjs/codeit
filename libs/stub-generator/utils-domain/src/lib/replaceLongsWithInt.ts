import type { RawVariable } from './type';

export const replaceLongsWithInt = ([name, type]: RawVariable): RawVariable =>
  type === 'long' ? [name, 'int'] : [name, type];
