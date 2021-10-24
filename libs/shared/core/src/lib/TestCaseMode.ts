import * as t from 'io-ts';

export const TestCaseMode = t.union([t.literal('final'), t.literal('sample')]);
export type TestCaseMode = t.TypeOf<typeof TestCaseMode>;
