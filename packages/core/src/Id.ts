import * as t from 'io-ts';

interface IdBrand {
  readonly Id: unique symbol;
}

export type Id = t.Branded<string, IdBrand>;

const isValid = (v: string): v is Id => v.length > 3 && v.length < 255;

export const Id = t.brand(t.string, isValid, 'Id');
