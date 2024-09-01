import { z } from 'zod';
import { queueJob, queueJobRequest, queueJobResponse } from './queue-job';

/**
 * The shape of the model inside the application code - what the users use
 */
export const queueJobList = z.lazy(() => {
  return z.object({
    items: z.array(queueJob).max(100),
  });
});

/**
 * Represents a list of queue jobs
 * @typedef  {QueueJobList} queueJobList - Represents a list of queue jobs - Represents a list of queue jobs
 * @property {QueueJob[]}
 */
export type QueueJobList = z.infer<typeof queueJobList>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const queueJobListResponse = z.lazy(() => {
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
export const queueJobListRequest = z.lazy(() => {
  return z.object({ items: z.array(queueJobRequest).nullish() }).transform((data) => ({
    items: data['items'],
  }));
});
