import type { FastifyInstance } from 'fastify';
import { requireAdmin } from '../../middleware/require-admin.js';
import type { AdminController } from './admin.controller.js';

export async function registerAdminRoutes(app: FastifyInstance, controller: AdminController) {
  app.post('/api/admin/auth/login', controller.login);

  app.register(async (adminRoutes) => {
    adminRoutes.addHook('preHandler', requireAdmin);
    adminRoutes.get('/stats', controller.stats);
    adminRoutes.get('/users', controller.listUsers);
    adminRoutes.get('/users/:id', controller.getUser);
    adminRoutes.delete('/users/:id', controller.deleteUser);
  }, { prefix: '/api/admin' });
}
