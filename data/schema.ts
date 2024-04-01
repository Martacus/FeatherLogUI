import { z } from 'zod'

export const domainSchema = z.object({
  domain: z.string()
});


export const logSchema = z.object({
  domain: z.string(),
  group: z.string(),
  tag: z.string(),
  log: z.string(),
})

export type Domain = z.infer<typeof domainSchema>;
export type Log = z.infer<typeof logSchema>;