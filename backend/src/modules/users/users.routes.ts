import type { FastifyInstance } from 'fastify';
import type { UsersController } from './users.controller.js';

export async function registerUsersRoutes(
  app: FastifyInstance,
  controller: UsersController,
) {
  app.get('/api/users', controller.list);
}
