import * as t from 'io-ts';

import { TestCase } from './TestCase';
import { TestOutput } from './TestOutput';

export const TestResult = t.type({
  testCase: TestCase,
  outputs: t.array(TestOutput),
});
