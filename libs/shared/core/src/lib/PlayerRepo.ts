import type * as TO from 'fp-ts/lib/TaskOption';

import type { Id } from './Id';
import type { Player } from './Player';

export interface PlayerRepo {
  getPlayerById: (id: Id) => TO.TaskOption<Player>;
}
