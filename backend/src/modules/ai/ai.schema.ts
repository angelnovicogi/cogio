import { z } from 'zod';

export const aiTimesheetSuggestSchema = z.object({
  weekStartDate: z.string().datetime(),
});
