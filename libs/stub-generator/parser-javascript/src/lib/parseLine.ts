import { Instruction, Loop } from '@codeit/core';
import { __, match } from 'ts-pattern';

// eslint-disable-next-line import/no-cycle
import { parseLoopCommand } from './parseLoopCommand';
import { parseLooplineCommand } from './parseLooplineCommand';
import { parseReadCommand } from './parseReadCommand';
import { parseWriteCommand } from './parseWriteCommand';

export const parseLine = (instruction: Instruction) => {
  // thanks u typescript for fucking up my pattern match ❤️
  if (instruction[0] === 'loop') return parseLoopCommand(instruction as Loop);

  return (
    match(instruction)
      .with(['read', __], parseReadCommand)
      .with(['loopline', __, __], parseLooplineCommand)
      .with(['write', __], parseWriteCommand)
      // .with(['loop', __], x => parseLoopCommand(x as string[]))
      .otherwise(() => '')
  );
};
