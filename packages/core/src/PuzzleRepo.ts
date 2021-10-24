import * as TO from 'fp-ts/lib/TaskOption';

import { Id } from './Id';
import { Puzzle } from './Puzzle';
import { PuzzleMode } from './PuzzleMode';
import { Title } from './Title';

export interface PuzzleRepo {
  getRandomPuzzle: () => TO.TaskOption<Puzzle>;
  getPuzzleById: (id: Id) => TO.TaskOption<Puzzle>;
  getPuzzleByTitle: (title: Title) => TO.TaskOption<Puzzle>;
  getRandomPuzzleByMode: (mode: PuzzleMode) => TO.TaskOption<Puzzle>;
}
