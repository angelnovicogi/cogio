import type { FastifyReply, FastifyRequest } from 'fastify';
import { adminUserIdParamSchema } from './admin.schema.js';
import type { AdminService } from './admin.service.js';

export class AdminController {
  constructor(private readonly service: AdminService) {}

  login = async (request: FastifyRequest, reply: FastifyReply) => {
    const result = await this.service.login(request.body);
    if (!result.ok) {
      return reply.status(result.status).send({ message: result.message });
    }
    return reply.send(result.data);
  };

  stats = async (_request: FastifyRequest, reply: FastifyReply) => {
    const data = await this.service.getStats();
    return reply.send({ data });
  };

  listUsers = async (_request: FastifyRequest, reply: FastifyReply) => {
    const data = await this.service.listUsers();
    return reply.send({ data });
  };

  getUser = async (request: FastifyRequest, reply: FastifyReply) => {
    const params = adminUserIdParamSchema.safeParse(request.params);
    if (!params.success) {
      return reply.status(400).send({ message: 'Invalid user id' });
    }
    const user = await this.service.getUser(params.data.id);
    if (!user) {
      return reply.status(404).send({ message: 'User not found' });
    }
    return reply.send({ data: user });
  };

  deleteUser = async (request: FastifyRequest, reply: FastifyReply) => {
    const params = adminUserIdParamSchema.safeParse(request.params);
    if (!params.success) {
      return reply.status(400).send({ message: 'Invalid user id' });
    }
    const result = await this.service.deleteUser(params.data.id);
    if (!result.ok) {
      return reply.status(result.status).send({ message: result.message });
    }
    return reply.send(result.data);
  };
}
