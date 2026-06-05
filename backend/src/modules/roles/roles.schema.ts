import { z } from 'zod';

export const RolesIdParamSchema = z.object({
  id: z.string().cuid(),
});
