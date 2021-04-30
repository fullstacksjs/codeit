import * as t from 'io-ts';

export const TestResultStatus = t.union([t.literal('passed'), t.literal('failed')]);
