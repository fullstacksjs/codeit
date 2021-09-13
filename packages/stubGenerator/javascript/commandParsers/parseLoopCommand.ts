import type { Loop } from '../../../core';
// eslint-disable-next-line import/no-cycle
import { parseLine } from '../parseLine';

export const parseLoopCommand = ([_, amount, instruction]: Loop): string => {
  const innerInstruction = parseLine(instruction)
    .split('\n')
    .map(i => `  ${i}`)
    .join('\n');
  return `range(${amount}).forEach(() => {
${innerInstruction}
});`;
};
