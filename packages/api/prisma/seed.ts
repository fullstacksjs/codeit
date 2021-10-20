import { main } from './seed/main';

main()
  .then(() => {
    console.log('seeding complete');
    process.exit(0);
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
