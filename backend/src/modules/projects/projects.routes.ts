import type { FastifyInstance } from 'fastify';
import type { ProjectsController } from './projects.controller.js';

export async function registerProjectsRoutes(
  app: FastifyInstance,
  controller: ProjectsController,
) {
  app.get('/api/projects', controller.list);
}
