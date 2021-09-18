import * as TO from 'fp-ts/lib/TaskOption';

import { Id } from './Id';
import { Player } from './Player';
import { Puzzle } from './Puzzle';
import { PuzzleMode } from './PuzzleMode';
import { Title } from './Title';

export interface PuzzleRepo {
  getRandomPuzzle: () => TO.TaskOption<Puzzle>;
  getPuzzleById: (id: Id) => TO.TaskOption<Puzzle>;
  getPuzzleByTitle: (title: Title) => TO.TaskOption<Puzzle>;
  getPuzzleRandomPuzzleByMode: (mode: PuzzleMode) => TO.TaskOption<Puzzle>;
}

export interface PlayerRepo {
  getPlayerById: (id: Id) => TO.TaskOption<Player>;
}
