import type { FastifyReply, FastifyRequest } from 'fastify';
import { aiTimesheetSuggestSchema } from './ai.schema.js';
import type { AiService } from './ai.service.js';

export class AiController {
  constructor(private readonly service: AiService) {}

  list = async (_request: FastifyRequest, reply: FastifyReply) => {
    const data = await this.service.list();
    return reply.send({ data });
  };

  suggestTimesheet = async (request: FastifyRequest, reply: FastifyReply) => {
    const body = aiTimesheetSuggestSchema.safeParse(request.body);
    if (!body.success) {
      return reply
        .status(400)
        .send({ message: 'Invalid request', errors: body.error.flatten() });
    }

    const result = await this.service.suggestTimesheetEntries({
      userId: 'placeholder',
      weekStartDate: body.data.weekStartDate,
    });

    return reply.send(result);
  };
}
