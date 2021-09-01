import * as R from 'ramda';
import { match } from 'ts-pattern';

import { eliminateConstrains, replaceLongsWithInt } from '../domain/';

export const parseLooplineCommand = ([countName, variable]: string[]) => {
  const [name, type] = R.pipe(R.split(':'), replaceLongsWithInt, eliminateConstrains)(variable);
  return match(type)
    .with('int', () => `const ${name} = readline().split(' ').slice(0, ${countName}).map(toInt);`)
    .with(
      'float',
      () => `const ${name} = readline().split(' ').slice(0, ${countName}).map(toFloat);`,
    )
    .with('word', () => `const ${name} = readline().split(' ').slice(0, ${countName});`)
    .otherwise(() => '');
};
