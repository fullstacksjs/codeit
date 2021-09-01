import * as R from 'ramda';

export const capitalize = R.compose(
  R.join(''),
  ([head, ...tail]) => [R.toUpper(head), ...tail],
  R.split(''),
);
