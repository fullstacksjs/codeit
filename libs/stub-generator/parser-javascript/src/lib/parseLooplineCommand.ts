import type { Loopline } from '@codeit/core';
import { match } from 'ts-pattern';

export const parseLooplineCommand = ([_, countName, [name, type]]: Loopline) =>
  match(type)
    .with(
      'int',
      () =>
        `const ${name} = readline().split(' ').slice(0, ${countName}).map(toInt);`,
    )
    .with(
      'float',
      () =>
        `const ${name} = readline().split(' ').slice(0, ${countName}).map(toFloat);`,
    )
    .with(
      'word',
      () => `const ${name} = readline().split(' ').slice(0, ${countName});`,
    )
    .otherwise(() => '');
