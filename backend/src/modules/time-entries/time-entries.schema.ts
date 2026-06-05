import { z } from 'zod';

export const TimeEntriesIdParamSchema = z.object({
  id: z.string().cuid(),
});
