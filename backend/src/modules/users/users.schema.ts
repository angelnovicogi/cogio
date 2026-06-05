import { z } from 'zod';

export const UsersIdParamSchema = z.object({
  id: z.string().cuid(),
});
