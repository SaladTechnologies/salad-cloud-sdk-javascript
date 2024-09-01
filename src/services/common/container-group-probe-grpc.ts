import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupProbeGrpc = z.lazy(() => {
  return z.object({
    service: z.string(),
    port: z.number().gte(0).lte(65536),
  });
});

/**
 *
 * @typedef  {ContainerGroupProbeGrpc} containerGroupProbeGrpc
 * @property {string}
 * @property {number}
 */
export type ContainerGroupProbeGrpc = z.infer<typeof containerGroupProbeGrpc>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupProbeGrpcResponse = z.lazy(() => {
  return z
    .object({
      service: z.string(),
      port: z.number().gte(0).lte(65536),
    })
    .transform((data) => ({
      service: data['service'],
      port: data['port'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupProbeGrpcRequest = z.lazy(() => {
  return z.object({ service: z.string().nullish(), port: z.number().nullish() }).transform((data) => ({
    service: data['service'],
    port: data['port'],
  }));
});
