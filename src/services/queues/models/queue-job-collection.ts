import { z } from 'zod';
import { queueJob, queueJobRequest, queueJobResponse } from './queue-job';

/**
 * The shape of the model inside the application code - what the users use
 */
export const queueJobCollection = z.lazy(() => {
  return z.object({
    items: z.array(queueJob).max(100),
  });
});

/**
 * Represents a Queue Job Collection
 * @typedef  {QueueJobCollection} queueJobCollection - Represents a Queue Job Collection - Represents a Queue Job Collection
 * @property {QueueJob[]} - The list of queue jobs
 */
export type QueueJobCollection = z.infer<typeof queueJobCollection>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const queueJobCollectionResponse = z.lazy(() => {
  return z
    .object({
      items: z.array(queueJobResponse).max(100),
    })
    .transform((data) => ({
      items: data['items'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const queueJobCollectionRequest = z.lazy(() => {
  return z.object({ items: z.array(queueJobRequest) }).transform((data) => ({
    items: data['items'],
  }));
});
