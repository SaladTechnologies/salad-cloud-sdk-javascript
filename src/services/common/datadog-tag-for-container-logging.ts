import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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
