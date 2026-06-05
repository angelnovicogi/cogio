import { z } from 'zod';

export const ReportsIdParamSchema = z.object({
  id: z.string().cuid(),
});
