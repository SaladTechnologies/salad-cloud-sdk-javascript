import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupNetworking = z.lazy(() => {
  return z.object({
    protocol: z.string(),
    port: z.number().gte(1).lte(65535),
    auth: z.boolean(),
    dns: z.string(),
  });
});

/**
 * Represents container group networking parameters
 * @typedef  {ContainerGroupNetworking} containerGroupNetworking - Represents container group networking parameters - Represents container group networking parameters
 * @property {ContainerNetworkingProtocol}
 * @property {number}
 * @property {boolean}
 * @property {string}
 */
export type ContainerGroupNetworking = z.infer<typeof containerGroupNetworking>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupNetworkingResponse = z.lazy(() => {
  return z
    .object({
      protocol: z.string(),
      port: z.number().gte(1).lte(65535),
      auth: z.boolean(),
      dns: z.string(),
    })
    .transform((data) => ({
      protocol: data['protocol'],
      port: data['port'],
      auth: data['auth'],
      dns: data['dns'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupNetworkingRequest = z.lazy(() => {
  return z
    .object({
      protocol: z.string().nullish(),
      port: z.number().nullish(),
      auth: z.boolean().nullish(),
      dns: z.string().nullish(),
    })
    .transform((data) => ({
      protocol: data['protocol'],
      port: data['port'],
      auth: data['auth'],
      dns: data['dns'],
    }));
});
