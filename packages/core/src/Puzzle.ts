import * as t from 'io-ts';
import * as tt from 'io-ts-types';

import { Id } from './Id';
import { InitialTemplate } from './InitialTemplate';
import { PuzzleMode } from './PuzzleMode';
import { TestCase } from './TestCase';
import { Title } from './Title';

export const Puzzle = t.type({
  id: Id,
  title: Title,
  mode: PuzzleMode,
  statement: tt.NonEmptyString,
  constraint: tt.NonEmptyString,
  inputDescription: tt.NonEmptyString,
  outputDescription: tt.NonEmptyString,
  initialTemplates: t.array(InitialTemplate),
  testCases: t.array(TestCase),
});

export type Puzzle = t.TypeOf<typeof Puzzle>;
