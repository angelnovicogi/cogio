import { z } from 'zod';

export const OrganizationsIdParamSchema = z.object({
  id: z.string().cuid(),
});
