import type { FastifyInstance } from 'fastify';
import { AiController } from './ai/ai.controller.js';
import { AiRepository } from './ai/ai.repository.js';
import { AiService } from './ai/ai.service.js';
import { registerAiRoutes } from './ai/ai.routes.js';
import { AuthController } from './auth/auth.controller.js';
import { AuthRepository } from './auth/auth.repository.js';
import { AuthService } from './auth/auth.service.js';
import { registerAuthRoutes } from './auth/auth.routes.js';
import { OrganizationsController } from './organizations/organizations.controller.js';
import { OrganizationsRepository } from './organizations/organizations.repository.js';
import { OrganizationsService } from './organizations/organizations.service.js';
import { registerOrganizationsRoutes } from './organizations/organizations.routes.js';
import { ProjectsController } from './projects/projects.controller.js';
import { ProjectsRepository } from './projects/projects.repository.js';
import { ProjectsService } from './projects/projects.service.js';
import { registerProjectsRoutes } from './projects/projects.routes.js';
import { ReportsController } from './reports/reports.controller.js';
import { ReportsRepository } from './reports/reports.repository.js';
import { ReportsService } from './reports/reports.service.js';
import { registerReportsRoutes } from './reports/reports.routes.js';
import { RolesController } from './roles/roles.controller.js';
import { RolesRepository } from './roles/roles.repository.js';
import { RolesService } from './roles/roles.service.js';
import { registerRolesRoutes } from './roles/roles.routes.js';
import { TasksController } from './tasks/tasks.controller.js';
import { TasksRepository } from './tasks/tasks.repository.js';
import { TasksService } from './tasks/tasks.service.js';
import { registerTasksRoutes } from './tasks/tasks.routes.js';
import { TimeEntriesController } from './time-entries/time-entries.controller.js';
import { TimeEntriesRepository } from './time-entries/time-entries.repository.js';
import { TimeEntriesService } from './time-entries/time-entries.service.js';
import { registerTimeEntriesRoutes } from './time-entries/time-entries.routes.js';
import { TimesheetsController } from './timesheets/timesheets.controller.js';
import { TimesheetsRepository } from './timesheets/timesheets.repository.js';
import { TimesheetsService } from './timesheets/timesheets.service.js';
import { registerTimesheetsRoutes } from './timesheets/timesheets.routes.js';
import { UsersController } from './users/users.controller.js';
import { UsersRepository } from './users/users.repository.js';
import { UsersService } from './users/users.service.js';
import { registerUsersRoutes } from './users/users.routes.js';

async function wireModule<TRepo, TService, TController>(
  app: FastifyInstance,
  Repo: new (prisma: FastifyInstance['prisma']) => TRepo,
  Service: new (repo: TRepo) => TService,
  Controller: new (service: TService) => TController,
  register: (app: FastifyInstance, controller: TController) => Promise<void>,
) {
  const repository = new Repo(app.prisma);
  const service = new Service(repository);
  const controller = new Controller(service);
  await register(app, controller);
}

export async function registerModules(app: FastifyInstance) {
  await wireModule(app, AuthRepository, AuthService, AuthController, registerAuthRoutes);
  await wireModule(
    app,
    OrganizationsRepository,
    OrganizationsService,
    OrganizationsController,
    registerOrganizationsRoutes,
  );
  await wireModule(app, UsersRepository, UsersService, UsersController, registerUsersRoutes);
  await wireModule(app, RolesRepository, RolesService, RolesController, registerRolesRoutes);
  await wireModule(app, ProjectsRepository, ProjectsService, ProjectsController, registerProjectsRoutes);
  await wireModule(app, TasksRepository, TasksService, TasksController, registerTasksRoutes);
  await wireModule(
    app,
    TimeEntriesRepository,
    TimeEntriesService,
    TimeEntriesController,
    registerTimeEntriesRoutes,
  );
  await wireModule(
    app,
    TimesheetsRepository,
    TimesheetsService,
    TimesheetsController,
    registerTimesheetsRoutes,
  );
  await wireModule(app, ReportsRepository, ReportsService, ReportsController, registerReportsRoutes);
  await wireModule(app, AiRepository, AiService, AiController, registerAiRoutes);
}
