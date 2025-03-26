import { z } from 'zod';
import { Queue, queue, queueRequest, queueResponse } from './queue';

/**
 * The shape of the model inside the application code - what the users use
 */
export const queueCollection = z.lazy(() => {
  return z.object({
    items: z.array(queue).max(100),
  });
});

/**
 * Represents a Queue Collection
 * @typedef  {QueueCollection} queueCollection - Represents a Queue Collection - Represents a Queue Collection
 * @property {Queue[]} - The list of queues.
 */
export type QueueCollection = z.infer<typeof queueCollection>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const queueCollectionResponse = z.lazy(() => {
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
export const queueCollectionRequest = z.lazy(() => {
  return z.object({ items: z.array(queueRequest) }).transform((data) => ({
    items: data['items'],
  }));
});
