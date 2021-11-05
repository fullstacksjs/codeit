import * as t from 'io-ts';

export enum TestCaseModes {
  final = 'final',
  sample = 'sample',
}
export const TestCaseMode = t.union([
  t.literal(TestCaseModes.final),
  t.literal(TestCaseModes.sample),
]);
export type TestCaseMode = t.TypeOf<typeof TestCaseMode>;
