import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * @property {QueueJobEventAction}
 * @property {string}
 */
export type QueueJobEvent = z.infer<typeof queueJobEvent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const queueJobEventRequest = z.lazy(() => {
  return z.object({ action: z.string().nullish(), time: z.string().nullish() }).transform((data) => ({
    action: data['action'],
    time: data['time'],
  }));
});
