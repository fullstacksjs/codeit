import { PuzzleModes } from '@codeit/core';
import { enumType } from 'nexus';

export const PuzzleModeArg = enumType({
  name: 'PuzzleMode',
  members: [{ name: PuzzleModes.normal }, { name: PuzzleModes.reverse }],
});
