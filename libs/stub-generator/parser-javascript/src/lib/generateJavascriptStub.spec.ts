import { parsedSyntax } from '@codeit/stub-generator/utils-mocks';

import { generateJavascriptStub } from './generateJavascriptStub';
import { parsedPuzzlesJs } from './parsedPuzzlesJs';

describe('javascript stub generator', () => {
  it('should generate valid code for "Non scientific calc"', () => {
    const code = generateJavascriptStub(parsedSyntax.nonScientificCalc);
    expect(code).toEqual(parsedPuzzlesJs.nonScientificCalc);
  });

  it('should generate valid code for "The Muffin Men Part - 1"', () => {
    const code = generateJavascriptStub(parsedSyntax.theMuffinMenPart1);
    expect(code).toEqual(parsedPuzzlesJs.theMuffinMenPart1);
  });

  it('should generate valid code for "Race road length"', () => {
    const code = generateJavascriptStub(parsedSyntax.raceRoadLength);
    expect(code).toEqual(parsedPuzzlesJs.raceRoadLength);
  });

  it('should generate valid code for "Sum of vectors"', () => {
    const code = generateJavascriptStub(parsedSyntax.sumOfVectors);
    expect(code).toEqual(parsedPuzzlesJs.sumOfVectors);
  });

  it('nested loops... a lie we told the contributors', () => {
    const code = generateJavascriptStub(parsedSyntax.nestedLoop);
    expect(code).toEqual(parsedPuzzlesJs.nestedLoop);
  });

  it('should generate valid code for "Tower of Ascension" (ignores the comments)', () => {
    const code = generateJavascriptStub(parsedSyntax.towerOfAscension);
    expect(code).toEqual(parsedPuzzlesJs.towerOfAscension);
  });

  it('should generate valid code for "censor this. easy"', () => {
    const code = generateJavascriptStub(parsedSyntax.censorThisEasy);
    expect(code).toEqual(parsedPuzzlesJs.censorThisEasy);
  });
});
