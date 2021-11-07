import { ApiServer } from './ApiServer';
import { getConfig } from './config/getConfig';

const config = getConfig();
const apiServer = ApiServer(config);

apiServer.listen(config.port, () =>
  console.log(`Listening on port ${config.port}`),
);
