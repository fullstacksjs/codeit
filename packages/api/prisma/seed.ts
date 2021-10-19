import { seedPlayers } from './seed/seedPlayers';
import { seedPuzzles } from './seed/seedPuzzles';

const main = () => Promise.all([seedPlayers(), seedPuzzles()]);
main()
  .then(() => console.log('seeding complete'))
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
