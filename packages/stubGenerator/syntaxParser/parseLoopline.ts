import { isNullOrEmpty } from '@fullstacksjs/toolbox';
import { flow, pipe } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import { not } from 'ramda';

import { Loopline } from '../../core';
import { parseVariable } from '../domain';

// we should choose one between parseLoop and parseLoopline style of conditioning \/
export const parseLoopline = ([count, rawVariable]: string[]): O.Option<Loopline> => {
  const isCountEmpty = isNullOrEmpty(count.trim());
  if (isCountEmpty) return O.none;
  return pipe(
    rawVariable,
    O.fromPredicate(flow(isNullOrEmpty, not)),
    O.chain(parseVariable),
    O.chain(variable => O.some(['loopline', count, variable])),
  );
};
