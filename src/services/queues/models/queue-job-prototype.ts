import { z } from 'zod';

/**
 * Zod schema for the QueueJobPrototype model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the QueueJobPrototype application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the QueueJobPrototype application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const queueJobPrototypeRequest = z.lazy(() => {
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
