import type { FastifyReply, FastifyRequest } from 'fastify';
import type { OrganizationsService } from './organizations.service.js';

export class OrganizationsController {
  constructor(private readonly service: OrganizationsService) {}

  list = async (_request: FastifyRequest, reply: FastifyReply) => {
    const data = await this.service.list();
    return reply.send({ data });
  };
}
