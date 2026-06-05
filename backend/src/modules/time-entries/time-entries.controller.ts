import type { FastifyReply, FastifyRequest } from 'fastify';
import type { TimeEntriesService } from './time-entries.service.js';

export class TimeEntriesController {
  constructor(private readonly service: TimeEntriesService) {}

  list = async (_request: FastifyRequest, reply: FastifyReply) => {
    const data = await this.service.list();
    return reply.send({ data });
  };
}
