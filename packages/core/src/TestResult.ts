import * as t from 'io-ts';

import { TestCase } from './TestCase';
import { TestOutput } from './TestOutput';
import { TestResultStatus } from './TestResultStatus';

export const TestResult = t.type({
  testCase: TestCase,
  outputs: t.array(TestOutput),
  status: TestResultStatus,
});
