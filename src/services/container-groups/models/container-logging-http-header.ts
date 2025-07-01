import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerLoggingHttpHeader = z.lazy(() => {
  return z.object({
    name: z.string().min(1).max(1000).regex(/^.*$/),
    value: z.string().min(1).max(1000).regex(/^.*$/),
  });
});

/**
 * Represents an HTTP header used for container logging configuration.
 * @typedef  {ContainerLoggingHttpHeader} containerLoggingHttpHeader - Represents an HTTP header used for container logging configuration. - Represents an HTTP header used for container logging configuration.
 * @property {string} - The name of the HTTP header
 * @property {string} - The value of the HTTP header
 */
export type ContainerLoggingHttpHeader = z.infer<typeof containerLoggingHttpHeader>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerLoggingHttpHeaderResponse = z.lazy(() => {
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
export const containerLoggingHttpHeaderRequest = z.lazy(() => {
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
