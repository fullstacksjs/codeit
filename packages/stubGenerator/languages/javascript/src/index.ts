/* eslint-disable import/no-cycle */
import { match } from 'ts-pattern';

import {
  // parseLoopCommand,
  // parseLooplineCommand,
  parseReadCommand,
  // parseWriteCommand,
} from './commandParsers/';

export const parseLine = (line: string) => {
  const [command, ...rest] = line.trim().split(' ');
  return (
    match(command)
      .with('read', () => parseReadCommand(rest))
      // .with('loopline', () => parseLooplineCommand(rest))
      // .with('loop', () => parseLoopCommand(rest))
      // .with('write', () => parseWriteCommand(rest))
      .otherwise(() => '')
  );
};

export const generateJavascriptStub = (input: string) => {
  const utils = `const toInt = x => Number.parseInt(x, 10);
const toFloat = x => Number.parseFloat(x, 10);
const range = n => [...Array(n)].map((_, i) => i);\n\n`;

  return utils + input.trim().split('\n').map(parseLine).join('\n');
};
