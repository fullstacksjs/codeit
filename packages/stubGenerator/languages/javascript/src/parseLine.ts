import { match } from 'ts-pattern';

// eslint-disable-next-line import/no-cycle
import {
  parseLoopCommand,
  parseLooplineCommand,
  parseReadCommand,
  parseWriteCommand,
} from './commandParsers/';

export const parseLine = (line: string) => {
  const [command, ...rest] = line.trim().split(' ');
  return match(command)
    .with('read', () => parseReadCommand(rest))
    .with('loopline', () => parseLooplineCommand(rest))
    .with('loop', () => parseLoopCommand(rest))
    .with('write', () => parseWriteCommand(rest))
    .otherwise(() => '');
};
