import type { FastifyReply, FastifyRequest } from 'fastify';
import type { ReportsService } from './reports.service.js';

export class ReportsController {
  constructor(private readonly service: ReportsService) {}

  list = async (_request: FastifyRequest, reply: FastifyReply) => {
    const data = await this.service.list();
    return reply.send({ data });
  };
}
