import { toCapitalCase } from '@fullstacksjs/toolbox';
import * as R from 'ramda';
import { match } from 'ts-pattern';

import {
  eliminateConstrains,
  isAllOfType,
  nameOf,
  replaceLongsWithInt,
  typeOf,
  Variable,
} from '../domain/';
import { throwErr } from '../utils';

const constLhsDestruction = (varNames: string[]) => `const [${varNames.join(', ')}]`;

const declareVariable = ([varName, type]: Variable, to: string) =>
  match(type)
    .with('float', () => `const ${varName} = toFloat(${to});`)
    .with('int', () => `const ${varName} = toInt(${to});`)
    .when(R.startsWith('string'), () => `const ${varName} = ${to};`)
    .otherwise(() => throwErr(`variable type "${type}" is unknown`));

const placeholderOf = (n: string) => `raw${toCapitalCase(n)}`;
const declarePlaceholderVariable = (vars: Variable[]) =>
  vars
    .filter(R.pipe(typeOf, R.equals('word'), R.not))
    .map(([name, type]) => declareVariable([name, type], placeholderOf(name)));

const parseVariablesOfDifferentType = (vars: Variable[]) => {
  const varNames = vars.map(([name, type]) => (type === 'word' ? name : placeholderOf(name)));
  return `${constLhsDestruction(varNames)} = readline().split(' ');
${declarePlaceholderVariable(vars).join('\n')}`;
};

const declareMultipleVariables = (vars: Variable[]) => {
  const varNames = R.map(nameOf, vars);
  return match(vars)
    .when(
      isAllOfType('int'),
      () => `${constLhsDestruction(varNames)} = readline().split(" ").map(toInt);`,
    )
    .when(
      isAllOfType('float'),
      () => `${constLhsDestruction(varNames)} = readline().split(" ").map(toFloat);`,
    )
    .when(isAllOfType('word'), () => `${constLhsDestruction(varNames)} = readline().split(" ")`)
    .otherwise(parseVariablesOfDifferentType);
};

export const parseReadCommand = (rawVariable: string[]): string => {
  const [firstVar, ...rest] = rawVariable.map(
    R.pipe(R.split(':'), replaceLongsWithInt, eliminateConstrains),
  ) as Variable[];

  const isSingleDeclaration = R.equals(rest, []);
  return isSingleDeclaration
    ? declareVariable(firstVar, 'readline()')
    : declareMultipleVariables([firstVar, ...rest]);
};
