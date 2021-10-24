import type { Syntax } from '@codeit/core';

type Keys =
  | 'censorThisEasy'
  | 'nestedLoop'
  | 'nonScientificCalc'
  | 'raceRoadLength'
  | 'sumOfVectors'
  | 'theMuffinMenPart1'
  | 'towerOfAscension';

export const parsedSyntax: Record<Keys, Syntax> = {
  nonScientificCalc: [
    ['read', [['s', 'string']]],
    ['write', '0'],
  ],
  theMuffinMenPart1: [
    ['read', [['n', 'int']]],
    ['read', [['c', 'string']]],
    ['write', 'Muffin People :3'],
  ],
  raceRoadLength: [
    ['read', [['N', 'int']]],
    [
      'loop',
      'N',
      [
        'read',
        [
          ['X', 'int'],
          ['Y', 'int'],
        ],
      ],
    ],
    ['write', 'length'],
  ],
  sumOfVectors: [
    [
      'read',
      [
        ['D', 'int'],
        ['N', 'int'],
      ],
    ],
    ['loop', 'N', ['loopline', 'D', ['x', 'int']]],
    ['write', 'X X X'],
  ],
  nestedLoop: [
    ['read', [['n', 'int']]],
    ['loop', '2', ['loop', 'n', ['read', [['line', 'string']]]]],
  ],
  towerOfAscension: [
    ['read', [['N', 'int']]],
    [
      'read',
      [
        ['P', 'int'],
        ['Q', 'int'],
      ],
    ],
  ],
  censorThisEasy: [
    ['read', [['c', 'int']]],
    ['read', [['list', 'string']]],
    ['read', [['n', 'int']]],
    ['loop', 'n', ['read', [['report', 'string']]]],
    ['write', 'answer'],
  ],
};
