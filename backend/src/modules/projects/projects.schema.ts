import { z } from 'zod';

export const ProjectsIdParamSchema = z.object({
  id: z.string().cuid(),
});
