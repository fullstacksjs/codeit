/* eslint-disable @typescript-eslint/no-unused-vars */

type Port = number;

interface App {
  listen: (port: Port) => Promise<Port>;
}

interface Config {
  port: Port;
}
