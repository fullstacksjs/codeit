import { isNullOrEmpty } from '@fullstacksjs/toolbox';
import { flow, pipe } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import * as RA from 'fp-ts/lib/ReadonlyArray';
import { map, not } from 'ramda';

import { Read } from '../../core';
import { parseVariable } from '../domain';

export const parseRead = (rawVariables: string[]): O.Option<Read> =>
  pipe(
    rawVariables,
    O.fromPredicate(flow(isNullOrEmpty, not)),
    O.chain(flow(map(parseVariable), O.sequenceArray)),
    O.map(RA.toArray),
    O.chain(x => O.some(['read', x])),
  );
