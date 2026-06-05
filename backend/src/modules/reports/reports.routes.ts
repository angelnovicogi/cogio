import type { FastifyInstance } from 'fastify';
import type { ReportsController } from './reports.controller.js';

export async function registerReportsRoutes(
  app: FastifyInstance,
  controller: ReportsController,
) {
  app.get('/api/reports', controller.list);
}
