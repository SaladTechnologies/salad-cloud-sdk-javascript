import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupTcpProbe = z.lazy(() => {
  return z.object({
    port: z.number().gte(0).lte(65535),
  });
});

/**
 * Configuration for a TCP probe used to check container health via network connectivity.
 * @typedef  {ContainerGroupTcpProbe} containerGroupTcpProbe - Configuration for a TCP probe used to check container health via network connectivity. - Configuration for a TCP probe used to check container health via network connectivity.
 * @property {number} - The TCP port number that the probe should connect to. Must be a valid port number between 0 and 65535.
 */
export type ContainerGroupTcpProbe = z.infer<typeof containerGroupTcpProbe>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupTcpProbeResponse = z.lazy(() => {
  return z
    .object({
      port: z.number().gte(0).lte(65535),
    })
    .transform((data) => ({
      port: data['port'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupTcpProbeRequest = z.lazy(() => {
  return z
    .object({
      port: z.number().gte(0).lte(65535),
    })
    .transform((data) => ({
      port: data['port'],
    }));
});
