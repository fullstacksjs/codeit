import * as TO from 'fp-ts/lib/TaskOption';

import { Id } from './Id';
import { Player } from './Player';

export interface PlayerRepo {
  getPlayerById: (id: Id) => TO.TaskOption<Player>;
}
