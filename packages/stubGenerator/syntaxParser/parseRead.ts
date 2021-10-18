import { Read } from '@codeit/core';
import { flow, pipe } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import * as NEA from 'fp-ts/NonEmptyArray';

import { parseVariable } from '../domain';

export const parseRead = (rawVariables: string[]): O.Option<Read> =>
  pipe(
    NEA.fromArray(rawVariables),
    O.chain(flow(NEA.map(parseVariable), NEA.sequence(O.Applicative))),
    O.chain(variables => O.some(['read', variables])),
  );
