import { z } from 'zod';

/**
 * Zod schema for the ContainerLoggingHttpHeader model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the ContainerLoggingHttpHeader application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the ContainerLoggingHttpHeader application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
