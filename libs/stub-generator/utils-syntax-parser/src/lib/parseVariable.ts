import { Variable } from '@codeit/core';
import {
  eliminateConstrains,
  replaceLongsWithInt,
} from '@codeit/stub-generator/utils-domain';
import { pipe } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import { split } from 'ramda';
import { __, match } from 'ts-pattern';

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
