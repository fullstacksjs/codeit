import { isNullOrEmpty } from '@fullstacksjs/toolbox';
import { constant, flow, pipe } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import { join, not } from 'ramda';

import { Loop } from '../../core';
import { parseLine } from './parseLine';

export const parseLoop = ([count, ...instruction]: string[]): O.Option<Loop> =>
  pipe(
    count,
    O.fromPredicate(flow(isNullOrEmpty, not)),
    O.map(constant(instruction)),
    O.map(join(' ')),
    O.chain(parseLine),
    O.map(i => ['loop', count, i]),
  );
