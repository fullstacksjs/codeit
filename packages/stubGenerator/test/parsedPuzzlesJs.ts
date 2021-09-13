export const parsedPuzzlesJs = {
  nonScientificCalc: `const toInt = x => Number.parseInt(x, 10);
const toFloat = x => Number.parseFloat(x, 10);
const range = n => [...Array(n)].map((_, i) => i);

const s = readline();
console.log('write 0');`,
  theMuffinMenPart1: `const toInt = x => Number.parseInt(x, 10);
const toFloat = x => Number.parseFloat(x, 10);
const range = n => [...Array(n)].map((_, i) => i);

const n = toInt(readline());
const c = readline();
console.log('write Muffin People :3');`,

  raceRoadLength: `const toInt = x => Number.parseInt(x, 10);
const toFloat = x => Number.parseFloat(x, 10);
const range = n => [...Array(n)].map((_, i) => i);

const N = toInt(readline());
range(N).forEach(() => {
  const [X, Y] = readline().split(' ').map(toInt);
});
console.log('write length');`,
  sumOfVectors: `const toInt = x => Number.parseInt(x, 10);
const toFloat = x => Number.parseFloat(x, 10);
const range = n => [...Array(n)].map((_, i) => i);

const [D, N] = readline().split(' ').map(toInt);
range(N).forEach(() => {
  const x = readline().split(' ').slice(0, D).map(toInt);
});
console.log('write X X X');`,
  nestedLoop: `const toInt = x => Number.parseInt(x, 10);
const toFloat = x => Number.parseFloat(x, 10);
const range = n => [...Array(n)].map((_, i) => i);

const n = toInt(readline());
range(2).forEach(() => {
  range(n).forEach(() => {
    const line = readline();
  });
});`,
  towerOfAscension: `const toInt = x => Number.parseInt(x, 10);
const toFloat = x => Number.parseFloat(x, 10);
const range = n => [...Array(n)].map((_, i) => i);

const N = toInt(readline());
const [P, Q] = readline().split(' ').map(toInt);`,
  censorThisEasy: `const toInt = x => Number.parseInt(x, 10);
const toFloat = x => Number.parseFloat(x, 10);
const range = n => [...Array(n)].map((_, i) => i);

const c = toInt(readline());
const list = readline();
const n = toInt(readline());
range(n).forEach(() => {
  const report = readline();
});
console.log('write answer');`,
};
