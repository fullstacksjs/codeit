import { parseLine } from './parseLine';

export const generateJavascriptStub = (input: string) => {
  const utils = `const toInt = x => Number.parseInt(x, 10);
const toFloat = x => Number.parseFloat(x, 10);
const range = n => [...Array(n)].map((_, i) => i);\n\n`;

  return utils + input.trim().split('\n').map(parseLine).join('\n');
};
