import { pipe } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import { split } from 'ramda';
import { __, match } from 'ts-pattern';

import { Variable } from '../../core';
import { eliminateConstrains } from '../domain/eliminateConstrains';
import { replaceLongsWithInt } from '../domain/replaceLongsWithInt';

export const parseVariable = (raw: string): O.Option<Variable> =>
  pipe(
    raw,
    split(':'),
    ([name, type]) => [name, type] as [string, string],
    replaceLongsWithInt,
    eliminateConstrains,
    variable =>
      match(variable)
        .with([__, 'float'], (x: Variable) => O.some(x))
        .with([__, 'int'], (x: Variable) => O.some(x))
        .with([__, 'string'], (x: Variable) => O.some(x))
        .with([__, 'word'], (x: Variable) => O.some(x))
        .otherwise(() => O.none),
  );
