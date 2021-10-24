import * as t from 'io-ts';

import { Id } from './Id';
import { TestCaseMode } from './TestCaseMode';
import { Title } from './Title';

export const TestCase = t.type({
  id: Id,
  title: Title,
  input: t.string,
  assertion: t.string,
  mode: TestCaseMode,
});
export type TestCase = t.TypeOf<typeof TestCase>;
