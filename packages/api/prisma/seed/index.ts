import { seedPlayers } from './seedPlayers';
import { seedPuzzles } from './seedPuzzles';

const main = () => Promise.all([seedPlayers(), seedPuzzles()]);
main()
  .then(() => {
    console.log('seeding complete');
    process.exit(0);
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
