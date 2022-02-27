import { getApiEnvironment } from '@codeit/environment';

import { createApp } from './app/createApp';

createApp()
  .listen(getApiEnvironment().port)
  .then(port => console.log(`🚀 Server is listening on port ${port}`));
