import * as t from 'io-ts';

import { TestCaseMode } from './TestCaseMode';
import { Title } from './Title';

export const TestCase = t.type({
  title: Title,
  input: t.string,
  assertion: t.string,
  mode: TestCaseMode,
});
