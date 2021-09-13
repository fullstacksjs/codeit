import { expect } from 'chai';

import { parseSyntax } from '../syntaxParser/parseSyntax';
import { puzzles } from './puzzles';

describe('stub generator syntax', () => {
  it('should parse "Non scientific calc"', done => {
    const code = parseSyntax(`${puzzles.nonScientificCalc}`);
    expect(code).not.to.deep.eq([]);
    done();
  });
  it('should parse half valid syntax', done => {
    const code = parseSyntax(`die${puzzles.nonScientificCalc}`);
    expect(code).not.to.deep.eq([]);
    done();
  });
  it('should parse valid syntax with extra space', done => {
    const code = parseSyntax(`${puzzles.theMuffinMenPart1}`);
    expect(code).not.to.deep.eq([]);
    done();
  });
  it('should not parse for no valid commands', done => {
    const code = parseSyntax(`${puzzles.theMuffinMenPart1.split('\n').map(x => `wtf${x}`)}`);
    expect(code).to.deep.eq([]);
    done();
  });
});
