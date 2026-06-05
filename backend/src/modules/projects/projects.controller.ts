import type { FastifyReply, FastifyRequest } from 'fastify';
import type { ProjectsService } from './projects.service.js';

export class ProjectsController {
  constructor(private readonly service: ProjectsService) {}

  list = async (_request: FastifyRequest, reply: FastifyReply) => {
    const data = await this.service.list();
    return reply.send({ data });
  };
}
