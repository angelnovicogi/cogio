import type { FastifyInstance } from 'fastify';
import type { AuthController } from './auth.controller.js';

export async function registerAuthRoutes(
  app: FastifyInstance,
  controller: AuthController,
) {
  app.get('/api/auth', controller.list);
}
