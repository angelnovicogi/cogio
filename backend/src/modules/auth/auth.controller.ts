import type { FastifyReply, FastifyRequest } from 'fastify';
import type { AuthService } from './auth.service.js';

export class AuthController {
  constructor(private readonly service: AuthService) {}

  list = async (_request: FastifyRequest, reply: FastifyReply) => {
    const data = await this.service.list();
    return reply.send({ data });
  };
}
