import * as t from 'io-ts';

interface UsernameBrand {
  readonly Username: unique symbol;
}

export type Username = t.Branded<string, UsernameBrand>;

const isValid = (v: string): v is Username =>
  v.length > 5 && v.length < 25 && /[^A-Za-z0-9]/.test(v);

export const Username = t.brand(t.string, isValid, 'Username');
