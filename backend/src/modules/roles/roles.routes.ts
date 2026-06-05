import type { FastifyInstance } from 'fastify';
import type { RolesController } from './roles.controller.js';

export async function registerRolesRoutes(
  app: FastifyInstance,
  controller: RolesController,
) {
  app.get('/api/roles', controller.list);
}
