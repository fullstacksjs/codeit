import { expect } from 'chai';

import { generateStub } from '..';
import { parsedPuzzlesJs } from './parsedPuzzlesJs';
import { puzzles } from './puzzles';

describe('javascript stub generator', () => {
  it('should generate valid code for "Non scientific calc"', done => {
    const code3 = generateStub('JavaScript', puzzles.nonScientificCalc);
    expect(code3).eq(parsedPuzzlesJs.nonScientificCalc);
    done();
  });
  it('should generate valid code for "The Muffin Men Part - 1"', done => {
    const code = generateStub('JavaScript', puzzles.theMuffinMenPart1);
    expect(code).eq(parsedPuzzlesJs.theMuffinMenPart1);
    done();
  });
  it('should generate valid code for "Race road length"', done => {
    const code = generateStub('JavaScript', puzzles.raceRoadLength);
    expect(code).eq(parsedPuzzlesJs.raceRoadLength);
    done();
  });
  it('should generate valid code for "Sum of vectors"', done => {
    const code = generateStub('JavaScript', puzzles.sumOfVectors);
    expect(code).eq(parsedPuzzlesJs.sumOfVectors);
    done();
  });
  it('should generate valid code for "Sum of vectors"', done => {
    const code = generateStub('JavaScript', puzzles.sumOfVectors);
    expect(code).eq(parsedPuzzlesJs.sumOfVectors);
    done();
  });
  it('nested loops... a lie we told the contributors', done => {
    const code = generateStub('JavaScript', puzzles.nestedLoop);
    expect(code).eq(parsedPuzzlesJs.nestedLoop);
    done();
  });
  it('should generate valid code for "Tower of Ascension" (ignores the comments)', done => {
    const code = generateStub('JavaScript', puzzles.towerOfAscension);
    expect(code).eq(parsedPuzzlesJs.towerOfAscension);
    done();
  });
  it('should generate valid code for "censor this. easy"', done => {
    const code = generateStub('JavaScript', puzzles.censorThisEasy);
    expect(code).eq(parsedPuzzlesJs.censorThisEasy);
    done();
  });
});
