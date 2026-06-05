import type { FastifyReply, FastifyRequest } from 'fastify';
import type { RolesService } from './roles.service.js';

export class RolesController {
  constructor(private readonly service: RolesService) {}

  list = async (_request: FastifyRequest, reply: FastifyReply) => {
    const data = await this.service.list();
    return reply.send({ data });
  };
}
