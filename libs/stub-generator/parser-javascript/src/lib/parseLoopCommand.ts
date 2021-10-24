import type { Loop } from '@codeit/core';
import { map } from 'fp-ts/lib/Array';
import { pipe } from 'fp-ts/lib/function';
import { join, split } from 'ramda';

// eslint-disable-next-line import/no-cycle
import { parseLine } from './parseLine';

export const parseLoopCommand = ([_, amount, instruction]: Loop): string =>
  pipe(
    parseLine(instruction),
    split('\n'),
    map(i => `  ${i}`),
    join('\n'),
    parsedInstruction =>
      `range(${amount}).forEach(() => {
${parsedInstruction}
});`,
  );
