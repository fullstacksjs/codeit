// eslint-disable-next-line import/no-cycle
import { parseLine } from '../parseLine';

export const parseLoopCommand = ([amount, ...commands]: string[]): string => {
  const innerCommands = parseLine(commands.join(' '));
  return `range(${amount}).forEach(() => {
    ${innerCommands}
  });`;
};
