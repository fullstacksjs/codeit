import * as t from 'io-ts';

export const TestCaseMode = t.union([t.literal('final'), t.literal('sample')]);
