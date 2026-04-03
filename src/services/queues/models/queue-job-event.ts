import { z } from 'zod';

/**
 * Zod schema for the QueueJobEvent model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const queueJobEvent = z.lazy(() => {
  return z.object({
    action: z.string(),
    time: z.string(),
  });
});

/**
 * Represents an event for queue job
 * @typedef  {QueueJobEvent} queueJobEvent - Represents an event for queue job - Represents an event for queue job
 * @property {Action} - The action that was taken on the queue job
 * @property {string} - The time the action was taken on the queue job
 */
export type QueueJobEvent = z.infer<typeof queueJobEvent>;

/**
 * Zod schema for mapping API responses to the QueueJobEvent application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const queueJobEventResponse = z.lazy(() => {
  return z
    .object({
      action: z.string(),
      time: z.string(),
    })
    .transform((data) => ({
      action: data['action'],
      time: data['time'],
    }));
});

/**
 * Zod schema for mapping the QueueJobEvent application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const queueJobEventRequest = z.lazy(() => {
  return z
    .object({
      action: z.string(),
      time: z.string(),
    })
    .transform((data) => ({
      action: data['action'],
      time: data['time'],
    }));
});
