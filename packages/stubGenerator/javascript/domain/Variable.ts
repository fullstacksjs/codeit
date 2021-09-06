import { VarType } from './VarType';

export type Variable = [string, VarType];

export const nameOf = ([name, _]: Variable) => name;
export const typeOf = ([_, type]: Variable) => type;
