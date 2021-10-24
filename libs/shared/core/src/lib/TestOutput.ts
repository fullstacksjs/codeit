import * as t from 'io-ts';

export const LogOutput = t.type({
  status: t.literal('log'),
  message: t.string,
});
export type LogOutput = t.TypeOf<typeof LogOutput>;

export const ErrorOutput = t.type({
  status: t.literal('error'),
  message: t.string,
  stack: t.string,
});
export type ErrorOutput = t.TypeOf<typeof ErrorOutput>;

export const TestOutput = t.union([LogOutput, ErrorOutput]);
export type TestOutput = t.TypeOf<typeof TestOutput>;
