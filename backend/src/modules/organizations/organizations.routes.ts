import type { FastifyInstance } from 'fastify';
import type { OrganizationsController } from './organizations.controller.js';

export async function registerOrganizationsRoutes(
  app: FastifyInstance,
  controller: OrganizationsController,
) {
  app.get('/api/organizations', controller.list);
}
