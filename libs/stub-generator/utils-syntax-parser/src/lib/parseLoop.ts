import { Loop } from '@codeit/core';
import { pipe } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import { Do } from 'fp-ts-contrib/Do';
import { join } from 'ramda';

// eslint-disable-next-line import/no-cycle
import { parseLine } from './parseLine';

export const parseLoop = ([
  rawCount,
  ...instructions
]: string[]): O.Option<Loop> =>
  Do(O.Monad)
    .bind('count', O.fromNullable(rawCount))
    .bind('instruction', pipe(instructions, join(' '), parseLine))
    .return(({ count, instruction }) => ['loop', count, instruction]);
