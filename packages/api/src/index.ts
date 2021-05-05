import http from 'http';

import { getEnv } from './getEnv';

const env = getEnv();
const server = http.createServer((req, res) => res.end("It's working"));

server.listen(env.port, () => console.log(`Listening on port ${env.port}`));
