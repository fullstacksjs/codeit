import { createApp } from './app/createApp';
import { getConfig } from './config/getConfig';

createApp()
  .listen(getConfig().port)
  .then(port => console.log(`🚀 Server is listening on port ${port}`));
