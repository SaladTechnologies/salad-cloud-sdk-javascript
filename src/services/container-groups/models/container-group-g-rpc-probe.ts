import { z } from 'zod';

/**
 * Zod schema for the ContainerGroupGRpcProbe model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerGroupGRpcProbe = z.lazy(() => {
  return z.object({
    port: z.number().gte(0).lte(65536),
    service: z.string().max(1024).regex(/^.*$/),
  });
});

/**
 * Configuration for gRPC-based health probes in container groups, used to determine container health status.
 * @typedef  {ContainerGroupGRpcProbe} containerGroupGRpcProbe - Configuration for gRPC-based health probes in container groups, used to determine container health status. - Configuration for gRPC-based health probes in container groups, used to determine container health status.
 * @property {number} - The port number on which the gRPC health check service is exposed.
 * @property {string} - The name of the gRPC service that implements the health check protocol.
 */
export type ContainerGroupGRpcProbe = z.infer<typeof containerGroupGRpcProbe>;

/**
 * Zod schema for mapping API responses to the ContainerGroupGRpcProbe application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupGRpcProbeResponse = z.lazy(() => {
  return z
    .object({
      port: z.number().gte(0).lte(65536),
      service: z.string().max(1024).regex(/^.*$/),
    })
    .transform((data) => ({
      port: data['port'],
      service: data['service'],
    }));
});

/**
 * Zod schema for mapping the ContainerGroupGRpcProbe application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupGRpcProbeRequest = z.lazy(() => {
  return z
    .object({
      port: z.number().gte(0).lte(65536),
      service: z.string().max(1024).regex(/^.*$/),
    })
    .transform((data) => ({
      port: data['port'],
      service: data['service'],
    }));
});
