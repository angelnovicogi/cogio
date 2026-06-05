import type { FastifyInstance } from 'fastify';
import type { TimeEntriesController } from './time-entries.controller.js';

export async function registerTimeEntriesRoutes(
  app: FastifyInstance,
  controller: TimeEntriesController,
) {
  app.get('/api/time-entries', controller.list);
}
