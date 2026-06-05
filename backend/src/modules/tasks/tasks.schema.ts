import { z } from 'zod';

export const TasksIdParamSchema = z.object({
  id: z.string().cuid(),
});
