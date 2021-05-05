interface Environment {
  port: number;
}

export function getEnv(): Environment {
  if (process.env.API_PORT == null) throw Error('API_PORT is missing from env');
  const port = Number.parseInt(process.env.API_PORT, 10);

  return {
    port,
  };
}
