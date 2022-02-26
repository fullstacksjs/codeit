import { apiPort } from '@codeit/environment';

import { createApp } from './app/createApp';

createApp()
  .listen(apiPort)
  .then(port => console.log(`🚀 Server is listening on port ${port}`));
