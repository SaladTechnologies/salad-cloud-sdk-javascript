import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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
