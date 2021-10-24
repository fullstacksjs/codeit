import * as t from 'io-ts';

export interface EmailBrand {
  readonly Email: unique symbol;
}

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = (email: string): email is t.Branded<string, EmailBrand> =>
  emailRegex.test(email);

const Email = t.brand(t.string, validateEmail, 'Email');

export { Email };
