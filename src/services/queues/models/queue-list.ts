import { z } from 'zod';
import { queue, queueRequest, queueResponse } from './queue';

/**
 * The shape of the model inside the application code - what the users use
 */
export const queueList = z.lazy(() => {
  return z.object({
    items: z.array(queue).max(100),
  });
});

/**
 * Represents a list of queues
 * @typedef  {QueueList} queueList - Represents a list of queues - Represents a list of queues
 * @property {Queue[]}
 */
export type QueueList = z.infer<typeof queueList>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const queueListResponse = z.lazy(() => {
  return z
    .object({
      items: z.array(queueResponse).max(100),
    })
    .transform((data) => ({
      items: data['items'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const queueListRequest = z.lazy(() => {
  return z.object({ items: z.array(queueRequest).nullish() }).transform((data) => ({
    items: data['items'],
  }));
});
