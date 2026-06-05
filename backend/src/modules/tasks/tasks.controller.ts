import type { FastifyReply, FastifyRequest } from 'fastify';
import type { TasksService } from './tasks.service.js';

export class TasksController {
  constructor(private readonly service: TasksService) {}

  list = async (_request: FastifyRequest, reply: FastifyReply) => {
    const data = await this.service.list();
    return reply.send({ data });
  };
}
