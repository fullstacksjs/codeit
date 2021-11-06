import type { Handler } from 'express';
import express from 'express';

export class App {
  app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  use(route: string, ...handlers: Handler[]) {
    this.app.use(route, ...handlers);
  }

  listen(port: number | string) {
    return new Promise(resolve => {
      this.app.listen(port, () => resolve(port));
    });
  }
}
