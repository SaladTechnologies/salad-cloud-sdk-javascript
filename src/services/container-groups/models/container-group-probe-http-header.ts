import { z } from 'zod';

/**
 * Zod schema for the ContainerGroupProbeHttpHeader model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerGroupProbeHttpHeader = z.lazy(() => {
  return z.object({
    name: z.string().min(1).max(256).regex(/^.*$/),
    value: z.string().min(1).max(1024).regex(/^.*$/),
  });
});

/**
 *
 * @typedef  {ContainerGroupProbeHttpHeader} containerGroupProbeHttpHeader
 * @property {string} - The name of the HTTP header
 * @property {string} - The value associated with the HTTP header
 */
export type ContainerGroupProbeHttpHeader = z.infer<typeof containerGroupProbeHttpHeader>;

/**
 * Zod schema for mapping API responses to the ContainerGroupProbeHttpHeader application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupProbeHttpHeaderResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().min(1).max(256).regex(/^.*$/),
      value: z.string().min(1).max(1024).regex(/^.*$/),
    })
    .transform((data) => ({
      name: data['name'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the ContainerGroupProbeHttpHeader application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupProbeHttpHeaderRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().min(1).max(256).regex(/^.*$/),
      value: z.string().min(1).max(1024).regex(/^.*$/),
    })
    .transform((data) => ({
      name: data['name'],
      value: data['value'],
    }));
});
