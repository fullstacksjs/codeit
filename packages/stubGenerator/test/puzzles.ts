export const puzzles = {
  nonScientificCalc: 'read s:string(256)\nwrite 0',
  theMuffinMenPart1: 'read n:int\nread c:string(255)\n\nwrite Muffin People :3',
  raceRoadLength: 'read N:int\r\nloop N read X:int Y:int\r\nwrite length',
  sumOfVectors: 'read D:int N:int\nloop N loopline D x:int\n\nwrite X X X',
  nestedLoop: 'read n:int\nloop 2 loop n read line:string(10)',
  towerOfAscension:
    'read N:int\nread P:int Q:int\n\nSTATEMENT\nPrint the maximum amount of blocks that can be used to construct the tower, or 0 if impossible.\n\nINPUT\nN: Desired height of the tower.\nP: Height of one available type of block.\nQ: Height of the other available type of block.',
  censorThisEasy:
    'read c:int\r\nread list:string(1024)\r\nread n:int\r\nloop n read report:string(1024) \r\nwrite answer  ',
};
