import type { NonEmptyArray } from 'fp-ts/NonEmptyArray';

export type VarType = 'float' | 'int' | 'string' | 'word';
export type Variable = [string, VarType];
export type Loop = ['loop', string, Instruction];
export type Loopline = ['loopline', string, Variable];
export type Read = ['read', NonEmptyArray<Variable>];
export type Write = ['write', string];

export type Instruction = Loop | Loopline | Read | Write;

export type Syntax = Instruction[];

export const nameOf = ([name, _]: Variable) => name;
export const typeOf = ([_, type]: Variable) => type;
