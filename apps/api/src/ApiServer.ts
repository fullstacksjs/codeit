import { Config } from '../config/getConfig';
import { App } from './App';
import { createHelixMiddleware } from './middleware/createHelixMiddleware';
import { createSchema } from './schema';

export class ApiServer {
  app: App;

  constructor(private config: Config) {
    this.app = new App();
  }

  public init() {
    this.app.use('/graphql', createHelixMiddleware({ schema: createSchema() }));
    return this;
  }

  listen() {
    return this.app.listen(this.config.port);
  }
}
