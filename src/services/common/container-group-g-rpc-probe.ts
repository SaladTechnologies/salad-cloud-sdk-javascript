import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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
