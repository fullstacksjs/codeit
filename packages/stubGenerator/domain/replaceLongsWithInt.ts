export const replaceLongsWithInt = ([name, type]: [string, string]): [string, string] =>
  type === 'long' ? [name, 'int'] : [name, type];
