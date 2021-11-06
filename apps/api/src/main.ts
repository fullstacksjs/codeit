import { ApiServer } from './app/ApiServer';
import { getConfig } from './config/getConfig';

new ApiServer(getConfig())
  .init()
  .listen()
  .then(port => console.log(`🚀 Server is listening on port ${port}`));
