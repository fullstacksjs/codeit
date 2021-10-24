import { puzzles } from '@codeit/stub-generator/utils-mocks';

import { parseSyntax } from './parseSyntax';

describe('stub generator syntax', () => {
  it('should parse "Non scientific calc"', () => {
    const code = parseSyntax(`${puzzles.nonScientificCalc}`);
    expect(code).toEqual([]);
  });

  it('should parse half valid syntax', () => {
    const code = parseSyntax(`die${puzzles.nonScientificCalc}`);
    expect(code).toEqual([]);
  });

  it('should parse valid syntax with extra space', () => {
    const code = parseSyntax(`${puzzles.theMuffinMenPart1}`);
    expect(code).toEqual([]);
  });

  it('should not parse for no valid commands', () => {
    const code = parseSyntax(
      `${puzzles.theMuffinMenPart1.split('\n').map(x => `wtf${x}`)}`,
    );
    expect(code).toEqual([]);
  });
});
