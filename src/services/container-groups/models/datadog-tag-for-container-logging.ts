import { z } from 'zod';

/**
 * Zod schema for the DatadogTagForContainerLogging model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const datadogTagForContainerLogging = z.lazy(() => {
  return z.object({
    name: z.string().min(1).max(1000).regex(/^.*$/),
    value: z.string().min(1).max(1000).regex(/^.*$/),
  });
});

/**
 * Represents a Datadog tag used for container logging metadata.
 * @typedef  {DatadogTagForContainerLogging} datadogTagForContainerLogging - Represents a Datadog tag used for container logging metadata. - Represents a Datadog tag used for container logging metadata.
 * @property {string} - The name of the metadata tag.
 * @property {string} - The value of the metadata tag.
 */
export type DatadogTagForContainerLogging = z.infer<typeof datadogTagForContainerLogging>;

/**
 * Zod schema for mapping API responses to the DatadogTagForContainerLogging application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const datadogTagForContainerLoggingResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().min(1).max(1000).regex(/^.*$/),
      value: z.string().min(1).max(1000).regex(/^.*$/),
    })
    .transform((data) => ({
      name: data['name'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the DatadogTagForContainerLogging application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const datadogTagForContainerLoggingRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().min(1).max(1000).regex(/^.*$/),
      value: z.string().min(1).max(1000).regex(/^.*$/),
    })
    .transform((data) => ({
      name: data['name'],
      value: data['value'],
    }));
});
