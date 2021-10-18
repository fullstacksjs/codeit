import { Instruction } from '@codeit/core';
import * as O from 'fp-ts/lib/Option';
import { match } from 'ts-pattern';

// eslint-disable-next-line import/no-cycle
import { parseLoop } from './parseLoop';
import { parseLoopline } from './parseLoopline';
import { parseRead } from './parseRead';
import { parseWrite } from './parseWrite';

export const parseLine = (rawLine: string): O.Option<Instruction> => {
  const [command, ...rest] = rawLine.trim().split(' ');
  return match(command)
    .with('read', () => parseRead(rest))
    .with('loop', () => parseLoop(rest))
    .with('loopline', () => parseLoopline(rest))
    .with('write', () => parseWrite(rest))
    .otherwise(() => O.none);
};
