import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateContainerGroupNetworking = z.lazy(() => {
  return z.object({
    port: z.number().gte(1).lte(65535).optional().nullable(),
  });
});

/**
 * Represents update container group networking parameters
 * @typedef  {UpdateContainerGroupNetworking} updateContainerGroupNetworking - Represents update container group networking parameters - Represents update container group networking parameters
 * @property {number}
 */
export type UpdateContainerGroupNetworking = z.infer<typeof updateContainerGroupNetworking>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateContainerGroupNetworkingResponse = z.lazy(() => {
  return z
    .object({
      port: z.number().gte(1).lte(65535).optional().nullable(),
    })
    .transform((data) => ({
      port: data['port'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateContainerGroupNetworkingRequest = z.lazy(() => {
  return z.object({ port: z.number().nullish() }).transform((data) => ({
    port: data['port'],
  }));
});
