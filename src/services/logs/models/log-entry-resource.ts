import { z } from 'zod';

/**
 * Zod schema for the LogEntryResource model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const logEntryResource = z.lazy(() => {
  return z.object({
    labels: z.any(),
    type: z.string().min(1).max(1000),
  });
});

/**
 * The resource associated with the log entry
 * @typedef  {LogEntryResource} logEntryResource - The resource associated with the log entry - The resource associated with the log entry
 * @property {any} - The labels associated with the resource
 * @property {string} - The type of the resource
 */
export type LogEntryResource = z.infer<typeof logEntryResource>;

/**
 * Zod schema for mapping API responses to the LogEntryResource application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const logEntryResourceResponse = z.lazy(() => {
  return z
    .object({
      labels: z.any(),
      type: z.string().min(1).max(1000),
    })
    .transform((data) => ({
      labels: data['labels'],
      type: data['type'],
    }));
});

/**
 * Zod schema for mapping the LogEntryResource application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const logEntryResourceRequest = z.lazy(() => {
  return z
    .object({
      labels: z.any(),
      type: z.string().min(1).max(1000),
    })
    .transform((data) => ({
      labels: data['labels'],
      type: data['type'],
    }));
});
