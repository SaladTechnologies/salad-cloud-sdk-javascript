import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const queueJobPrototype = z.lazy(() => {
  return z.object({
    input: z.any(),
    metadata: z.any().optional(),
    webhook: z.string().min(1).max(2048).regex(/^.*$/).optional(),
  });
});

/**
 * Represents a request to create a queue job
 * @typedef  {QueueJobPrototype} queueJobPrototype - Represents a request to create a queue job - Represents a request to create a queue job
 * @property {any} - The job input. May be any valid JSON.
 * @property {any} - Additional metadata for the job
 * @property {string} - The webhook to call when the job completes
 */
export type QueueJobPrototype = z.infer<typeof queueJobPrototype>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const queueJobPrototypeResponse = z.lazy(() => {
  return z
    .object({
      input: z.any(),
      metadata: z.any().optional(),
      webhook: z.string().min(1).max(2048).regex(/^.*$/).optional(),
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
export const queueJobPrototypeRequest = z.lazy(() => {
  return z
    .object({ input: z.any(), metadata: z.any().optional(), webhook: z.string().optional() })
    .transform((data) => ({
      input: data['input'],
      metadata: data['metadata'],
      webhook: data['webhook'],
    }));
});
