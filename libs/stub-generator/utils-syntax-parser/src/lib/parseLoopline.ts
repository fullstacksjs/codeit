import type { Loopline } from '@codeit/core';
import { pipe } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import { Do } from 'fp-ts-contrib/lib/Do';

import { parseVariable } from './parseVariable';

export const parseLoopline = ([
  rawCount,
  rawVariable,
]: string[]): O.Option<Loopline> =>
  Do(O.Monad)
    .bind('count', O.fromNullable(rawCount))
    .bind('variable', pipe(O.fromNullable(rawVariable), O.chain(parseVariable)))
    .return(({ variable, count }) => ['loopline', count, variable]);
