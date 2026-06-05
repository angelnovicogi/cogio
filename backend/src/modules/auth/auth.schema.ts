import { z } from 'zod';

export const AuthIdParamSchema = z.object({
  id: z.string().cuid(),
});
