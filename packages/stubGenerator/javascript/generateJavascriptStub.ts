import { Syntax } from '../../core';
import { parseLine } from './parseLine';

export const generateJavascriptStub = (input: Syntax) => {
  // TODO: put utils as global helpers

  const utils = `const toInt = x => Number.parseInt(x, 10);
const toFloat = x => Number.parseFloat(x, 10);
const range = n => [...Array(n)].map((_, i) => i);\n\n`;

  return utils + input.map(parseLine).join('\n');
};
