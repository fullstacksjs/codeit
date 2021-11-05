import { enumType } from 'nexus';

export const PuzzleModeArg = enumType({
  name: 'PuzzleMode',
  members: [{ name: 'normal' }, { name: 'reverse' }],
});
