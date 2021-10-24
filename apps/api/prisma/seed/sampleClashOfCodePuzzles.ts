import { generateStub } from '@codeit/stub-generator';
import { Prisma } from '@prisma/client';

export const sampleClashOfCodePuzzles: Prisma.PuzzleCreateInput[] = [
  {
    title: 'Multiply Plus Minus',
    constraint: '1 ≤ len([[input]]) ≤ 100',
    inputDescription:
      '<<Line 1:>> A line [[input]] of text containing only {{+}}, {{-}} and {{*}}.',
    outputDescription: '<<Line 1:>> The output of the calculation.',
    initialTemplates: {
      create: [
        {
          language: 'JavaScript',
          template: generateStub(
            'JavaScript',
            'read LINE:string(101)\nwrite 0',
          ),
        },
      ],
    },
    statement:
      'You are given a line containing the characters "{{+}}", "{{-}}", and "{{*}}". \nThe stretches with "{{+}}" and "{{-}}" define a number where each "{{+}}" increases the number and each "{{-}}" decreases the number, starting from 0.\nFor example, {{++-++-++}} makes 4.\n\nMultiply all the numbers separated by "{{*}}" signs.\n\nOutput the resulting product.',
    mode: 'reverse',
    testCases: {
      create: [
        { title: 'Test 1', assertion: '3', input: '+++', mode: 'sample' },
        { title: 'Validator 1', assertion: '4', input: '++++', mode: 'final' },
        { title: 'Test 2', assertion: '0', input: '+-+-', mode: 'sample' },
        { title: 'Validator 2', assertion: '0', input: '-+-+', mode: 'final' },
        {
          title: 'Test 3',
          assertion: '-3',
          input: '+++--*----+',
          mode: 'sample',
        },
        {
          title: 'Validator 3',
          assertion: '9',
          input: '++++-*+++++--',
          mode: 'final',
        },
        {
          title: 'Test 4',
          assertion: '-12',
          input: '--+++-+-+-+*+++-++++---+-*-+-+-+----++*++++--',
          mode: 'sample',
        },
        {
          title: 'Validator 4',
          assertion: '54',
          input: '----+-+*-+---+-+-*--+++--++++-+*-+-+++-+-+-+-*+++++---',
          mode: 'final',
        },
      ],
    },
  },
  {
    title: 'Create new strings by deleting letters',
    constraint:
      'The string [[s]] has at most 7 different lowercase letters.\n1 <= [[n]] <= 2^length([[s]])',
    inputDescription:
      '<<First line:>> a string [[s]] consisting of lowercase letters\n<<Second line:>> a number [[n]]',
    outputDescription: 'A string',
    initialTemplates: {
      create: [
        {
          language: 'JavaScript',
          template: generateStub(
            'JavaScript',
            'read s:string(10)\nread n:int\nwrite answer\n',
          ),
        },
      ],
    },
    statement:
      'You are given a string of unique lowercase letters [[s]] and a number [[n]].\n\nYour task is to create new strings by removing letters of the original string [[s]]. You can remove none, any or all of the letters. The order of those letters is preserved.\n\nNow create all strings following the rules above. Then sort the resulting list first by length, then alphabetically. Then output the [[n]]-th string of the list.\n\n<<Example:>> [[s]] is "cab", [[n]] is 6\nPossible strings are: "", "a", "b", "c", "ab", "ca", "cb", "cab"\nYour output should be {{"ca"}}',
    mode: 'normal',
    testCases: {
      create: [
        { title: 'Test 1', assertion: '"ca"', input: 'cab\n6', mode: 'sample' },
        {
          title: 'Validator 1',
          assertion: '"a"',
          input: 'faq\n2',
          mode: 'final',
        },
        { title: 'Test 2', assertion: '""', input: 'abc\n1', mode: 'sample' },
        {
          title: 'Validator 2',
          assertion: '""',
          input: 'learn\n1',
          mode: 'final',
        },
        {
          title: 'Test 3',
          assertion: '"zg"',
          input: 'zerg\n10',
          mode: 'sample',
        },
        {
          title: 'Validator 3',
          assertion: '"wtr"',
          input: 'winter\n42',
          mode: 'final',
        },
        {
          title: 'Test 5',
          assertion: '"clash"',
          input: 'clash\n32',
          mode: 'sample',
        },
        {
          title: 'Validator 5',
          assertion: '"codin"',
          input: 'codin\n32',
          mode: 'final',
        },
        {
          title: 'Test 5',
          assertion: '"ckes"',
          input: 'packers\n77',
          mode: 'sample',
        },
        {
          title: 'Validator 5',
          assertion: '"wtzy"',
          input: 'qwertzy\n99',
          mode: 'final',
        },
      ],
    },
  },
];
