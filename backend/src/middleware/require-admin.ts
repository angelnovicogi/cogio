import type { FastifyReply, FastifyRequest } from 'fastify';
import { ROLE_ADMIN } from '../constants/roles.js';
import { authenticate } from './auth.js';

export async function requireAdmin(request: FastifyRequest, reply: FastifyReply) {
  await authenticate(request, reply);
  if (reply.sent) return;

  const user = request.user as { role?: string };
  if (user.role !== ROLE_ADMIN) {
    return reply.status(403).send({ message: 'Admin access required' });
  }
}
