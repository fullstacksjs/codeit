import type { Write } from '@codeit/core';
import { isNullOrEmpty } from '@fullstacksjs/toolbox';
import { flow, pipe } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';
import { join, not, replace } from 'ramda';

export const parseWrite = (instruction: string[]): O.Option<Write> =>
  pipe(
    instruction,
    join(' '),
    replace(/'/g, '"'),
    O.fromPredicate(flow(isNullOrEmpty, not)),
    O.map(i => ['write', i]),
  );
