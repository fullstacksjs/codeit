import { seedPlayers } from './seedPlayers';
import { seedPuzzles } from './seedPuzzles';

export const main = () => Promise.all([seedPlayers(), seedPuzzles()]);
