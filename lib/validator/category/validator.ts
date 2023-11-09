import { z } from "zod";
const AddValidator = z.object({
  name: z.string().trim().min(1),
});

export { AddValidator };
