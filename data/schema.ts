import { z } from 'zod'

export const domainSchema = z.object({
  domain: z.string()
});

export type Domain = z.infer<typeof domainSchema>;