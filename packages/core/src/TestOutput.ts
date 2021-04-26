import * as t from 'io-ts';

export const LogOutput = t.type({
  status: t.literal('log'),
  message: t.string,
});

export const ErrorOutput = t.type({
  status: t.literal('error'),
  message: t.string,
  stack: t.string,
});

export const TestOutput = t.union([LogOutput, ErrorOutput]);
