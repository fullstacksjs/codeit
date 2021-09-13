/* eslint-disable @typescript-eslint/no-use-before-define */
import { isNullOrEmpty } from '@fullstacksjs/toolbox';
import { compact } from 'fp-ts/lib/Array';
import { flow, pipe } from 'fp-ts/lib/function';
import { filter, map, not, split } from 'ramda';

import { Syntax } from '../../core';
import { parseLine } from './parseLine';

export const parseSyntax = (raw: string): Syntax =>
  pipe(raw, split('\n'), map(parseLine), compact, filter(flow(isNullOrEmpty, not)));
