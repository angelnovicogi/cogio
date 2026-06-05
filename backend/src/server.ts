import { buildApp, env } from './app.js';
import { createSocketServer } from './socket/index.js';

async function start() {
  const app = await buildApp();

  await app.listen({ port: env.PORT, host: env.HOST });

  const httpServer = app.server;
  createSocketServer(httpServer);

  app.log.info(`Server listening on http://${env.HOST}:${env.PORT}`);
}

start().catch((err) => {
  console.error(err);
  process.exit(1);
});
