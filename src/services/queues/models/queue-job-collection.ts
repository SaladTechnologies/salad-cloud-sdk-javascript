import { z } from 'zod';
import { QueueJob, queueJob, queueJobRequest, queueJobResponse } from './queue-job';

/**
 * Zod schema for the QueueJobCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the QueueJobCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the QueueJobCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const queueJobCollectionRequest = z.lazy(() => {
  return z
    .object({
      items: z.array(queueJobRequest).max(100),
    })
    .transform((data) => ({
      items: data['items'],
    }));
});
