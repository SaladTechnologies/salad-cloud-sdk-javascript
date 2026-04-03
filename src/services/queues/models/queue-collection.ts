import { z } from 'zod';
import { Queue, queue, queueRequest, queueResponse } from './queue';

/**
 * Zod schema for the QueueCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the QueueCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the QueueCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const queueCollectionRequest = z.lazy(() => {
  return z
    .object({
      items: z.array(queueRequest).max(100),
    })
    .transform((data) => ({
      items: data['items'],
    }));
});
