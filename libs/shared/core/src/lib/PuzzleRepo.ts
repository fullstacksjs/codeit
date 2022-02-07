import type * as TO from 'fp-ts/lib/TaskOption';

import type { Id } from './Id';
import type { Puzzle } from './Puzzle';
import type { PuzzleMode } from './PuzzleMode';
import type { Title } from './Title';

export interface PuzzleRepo {
  getRandomPuzzle: () => TO.TaskOption<Puzzle>;
  getPuzzleById: (id: Id) => TO.TaskOption<Puzzle>;
  getPuzzleByTitle: (title: Title) => TO.TaskOption<Puzzle>;
  getRandomPuzzleByMode: (mode: PuzzleMode) => TO.TaskOption<Puzzle>;
}
