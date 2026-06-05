import Fastify from 'fastify';
import { env } from './config/env.js';
import { logger } from './config/logger.js';
import { AdminController } from './modules/admin/admin.controller.js';
import { AdminRepository } from './modules/admin/admin.repository.js';
import { AdminService } from './modules/admin/admin.service.js';
import { registerAdminRoutes } from './modules/admin/admin.routes.js';
import { registerModules } from './modules/register.js';
import { registerCors } from './plugins/cors.js';
import { registerJwt } from './plugins/jwt.js';
import { registerPrisma } from './plugins/prisma.js';

export async function buildApp() {
  const app = Fastify({
    logger,
  });

  await registerCors(app);
  await registerJwt(app);
  await registerPrisma(app);

  app.get('/health', async () => ({ status: 'ok' }));

  await registerModules(app);

  const adminRepository = new AdminRepository(app.prisma);
  const adminService = new AdminService(adminRepository, app);
  const adminController = new AdminController(adminService);
  await registerAdminRoutes(app, adminController);

  return app;
}

export { env };
