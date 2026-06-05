import type { FastifyInstance } from 'fastify';
import type { AiController } from './ai.controller.js';

export async function registerAiRoutes(app: FastifyInstance, controller: AiController) {
  app.get('/api/ai', controller.list);
  app.post('/api/ai/timesheet/suggest', controller.suggestTimesheet);
}
