import { z } from "zod";
const AddValidator = z.array(
  z.object({
    content: z.string().trim().min(1),
    title: z.string().trim().min(1),
    pretitle: z.string().trim().min(1),
    image: z.string().trim().url(),
    question: z.string().trim().min(1),
    answer: z.string().trim().min(1),
    hint: z.string().trim().min(1),
  })
);

export { AddValidator };
