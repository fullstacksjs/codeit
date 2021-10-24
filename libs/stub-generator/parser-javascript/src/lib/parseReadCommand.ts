import { nameOf, Read, typeOf, Variable } from '@codeit/core';
import { isAllOfType } from '@codeit/stub-generator/utils-domain';
import { throwErr, toCapitalCase } from '@fullstacksjs/toolbox';
import * as R from 'ramda';
import { match } from 'ts-pattern';

const constLhsDestruction = (varNames: string[]) =>
  `const [${varNames.join(', ')}]`;
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
  const varNames = vars.map(([name, type]) =>
    type === 'word' ? name : placeholderOf(name),
  );
  return `${constLhsDestruction(varNames)} = readline().split(' ');
${declarePlaceholderVariable(vars).join('\n')}`;
};

const declareMultipleVariables = (vars: Variable[]) => {
  const varNames = R.map(nameOf, vars);
  return match(vars)
    .when(
      isAllOfType('int'),
      () =>
        `${constLhsDestruction(varNames)} = readline().split(' ').map(toInt);`,
    )
    .when(
      isAllOfType('float'),
      () =>
        `${constLhsDestruction(
          varNames,
        )} = readline().split(' ').map(toFloat);`,
    )
    .when(
      isAllOfType('word'),
      () => `${constLhsDestruction(varNames)} = readline().split(' ')`,
    )
    .otherwise(parseVariablesOfDifferentType);
};

export const parseReadCommand = ([_, variables]: Read): string => {
  const [firstVar, ...rest] = variables;

  const isSingleDeclaration = R.equals(rest, []);
  return isSingleDeclaration
    ? declareVariable(firstVar, 'readline()')
    : declareMultipleVariables([firstVar, ...rest]);
};
