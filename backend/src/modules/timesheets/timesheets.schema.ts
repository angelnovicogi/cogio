import { z } from 'zod';

export const TimesheetsIdParamSchema = z.object({
  id: z.string().cuid(),
});
