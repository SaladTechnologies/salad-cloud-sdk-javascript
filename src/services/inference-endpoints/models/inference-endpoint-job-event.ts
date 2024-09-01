import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const inferenceEndpointJobEvent = z.lazy(() => {
  return z.object({
    action: z.string(),
    time: z.string(),
  });
});

/**
 * Represents an event for inference endpoint job
 * @typedef  {InferenceEndpointJobEvent} inferenceEndpointJobEvent - Represents an event for inference endpoint job - Represents an event for inference endpoint job
 * @property {InferenceEndpointJobEventAction}
 * @property {string}
 */
export type InferenceEndpointJobEvent = z.infer<typeof inferenceEndpointJobEvent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const inferenceEndpointJobEventResponse = z.lazy(() => {
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
export const inferenceEndpointJobEventRequest = z.lazy(() => {
  return z.object({ action: z.string().nullish(), time: z.string().nullish() }).transform((data) => ({
    action: data['action'],
    time: data['time'],
  }));
});
