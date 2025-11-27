import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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
