import * as t from 'io-ts';

export const TestResultStatus = t.union([
  t.literal('passed'),
  t.literal('failed'),
]);
export type TestResultStatus = t.TypeOf<typeof TestResultStatus>;
