import * as t from 'io-ts';
import * as tt from 'io-ts-types';

import { TestCaseMode } from './TestCaseMode';
import { Title } from './Title';

export const TestCase = t.type({
  id: tt.NonEmptyString,
  title: Title,
  input: t.string,
  assertion: t.string,
  mode: TestCaseMode,
});
