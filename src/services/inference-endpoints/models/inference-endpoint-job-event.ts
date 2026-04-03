import { z } from 'zod';

/**
 * Zod schema for the InferenceEndpointJobEvent model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * @property {InferenceEndpointJobEventAction} - The action that was taken on the inference endpoint job.
 * @property {string} - The time the event occurred.
 */
export type InferenceEndpointJobEvent = z.infer<typeof inferenceEndpointJobEvent>;

/**
 * Zod schema for mapping API responses to the InferenceEndpointJobEvent application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the InferenceEndpointJobEvent application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const inferenceEndpointJobEventRequest = z.lazy(() => {
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
