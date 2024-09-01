import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createContainerGroupNetworking = z.lazy(() => {
  return z.object({
    protocol: z.string(),
    port: z.number().gte(1).lte(65535),
    auth: z.boolean(),
  });
});

/**
 * Represents container group networking parameters
 * @typedef  {CreateContainerGroupNetworking} createContainerGroupNetworking - Represents container group networking parameters - Represents container group networking parameters
 * @property {ContainerNetworkingProtocol}
 * @property {number}
 * @property {boolean}
 */
export type CreateContainerGroupNetworking = z.infer<typeof createContainerGroupNetworking>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createContainerGroupNetworkingResponse = z.lazy(() => {
  return z
    .object({
      protocol: z.string(),
      port: z.number().gte(1).lte(65535),
      auth: z.boolean(),
    })
    .transform((data) => ({
      protocol: data['protocol'],
      port: data['port'],
      auth: data['auth'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createContainerGroupNetworkingRequest = z.lazy(() => {
  return z
    .object({ protocol: z.string().nullish(), port: z.number().nullish(), auth: z.boolean().nullish() })
    .transform((data) => ({
      protocol: data['protocol'],
      port: data['port'],
      auth: data['auth'],
    }));
});
