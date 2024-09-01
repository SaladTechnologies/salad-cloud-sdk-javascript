import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createQueueJob = z.lazy(() => {
  return z.object({
    input: z.any(),
    metadata: z.any().optional().nullable(),
    webhook: z.string().optional().nullable(),
  });
});

/**
 * Represents a request to create a queue job
 * @typedef  {CreateQueueJob} createQueueJob - Represents a request to create a queue job - Represents a request to create a queue job
 * @property {any} - The job input. May be any valid JSON.
 * @property {any}
 * @property {string}
 */
export type CreateQueueJob = z.infer<typeof createQueueJob>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createQueueJobResponse = z.lazy(() => {
  return z
    .object({
      input: z.any(),
      metadata: z.any().optional().nullable(),
      webhook: z.string().optional().nullable(),
    })
    .transform((data) => ({
      input: data['input'],
      metadata: data['metadata'],
      webhook: data['webhook'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createQueueJobRequest = z.lazy(() => {
  return z
    .object({ input: z.any().nullish(), metadata: z.any().nullish(), webhook: z.string().nullish() })
    .transform((data) => ({
      input: data['input'],
      metadata: data['metadata'],
      webhook: data['webhook'],
    }));
});
