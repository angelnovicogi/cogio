import type { FastifyInstance } from 'fastify';
import type { TasksController } from './tasks.controller.js';

export async function registerTasksRoutes(
  app: FastifyInstance,
  controller: TasksController,
) {
  app.get('/api/tasks', controller.list);
}
