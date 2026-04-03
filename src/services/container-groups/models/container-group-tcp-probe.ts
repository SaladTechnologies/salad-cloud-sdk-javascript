import { z } from 'zod';

/**
 * Zod schema for the ContainerGroupTcpProbe model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the ContainerGroupTcpProbe application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the ContainerGroupTcpProbe application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
