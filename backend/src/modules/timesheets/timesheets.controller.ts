import type { FastifyReply, FastifyRequest } from 'fastify';
import type { TimesheetsService } from './timesheets.service.js';

export class TimesheetsController {
  constructor(private readonly service: TimesheetsService) {}

  list = async (_request: FastifyRequest, reply: FastifyReply) => {
    const data = await this.service.list();
    return reply.send({ data });
  };
}
