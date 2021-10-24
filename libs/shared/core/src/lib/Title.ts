import * as t from 'io-ts';

export interface TitleBrand {
  readonly Title: unique symbol;
}

export type Title = t.Branded<string, TitleBrand>;

const isValid = (v: string): v is Title => v.length > 3 && v.length < 255;

export const Title = t.brand(t.string, isValid, 'Title');
