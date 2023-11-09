import { z } from "zod";
const AddValidator = z.object({
  name: z.string().trim().min(1),
  setDefault: z.boolean(),
  description: z.string().optional(),
  paidAddon: z.number().min(0),
});

export { AddValidator };
