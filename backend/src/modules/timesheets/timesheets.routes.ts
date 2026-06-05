import type { FastifyInstance } from 'fastify';
import type { TimesheetsController } from './timesheets.controller.js';

export async function registerTimesheetsRoutes(
  app: FastifyInstance,
  controller: TimesheetsController,
) {
  app.get('/api/timesheets', controller.list);
}
