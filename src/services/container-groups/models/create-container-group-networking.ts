import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createContainerGroupNetworking = z.lazy(() => {
  return z.object({
    protocol: z.string(),
    port: z.number().gte(1).lte(65535),
    auth: z.boolean(),
    loadBalancer: z.string().optional(),
    singleConnectionLimit: z.boolean().optional(),
    clientRequestTimeout: z.number().gte(1).lte(100000).optional(),
    serverResponseTimeout: z.number().gte(1).lte(100000).optional(),
  });
});

/**
 * Represents container group networking parameters
 * @typedef  {CreateContainerGroupNetworking} createContainerGroupNetworking - Represents container group networking parameters - Represents container group networking parameters
 * @property {ContainerNetworkingProtocol}
 * @property {number}
 * @property {boolean}
 * @property {CreateContainerGroupNetworkingLoadBalancer}
 * @property {boolean}
 * @property {number}
 * @property {number}
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
      load_balancer: z.string().optional(),
      single_connection_limit: z.boolean().optional(),
      client_request_timeout: z.number().gte(1).lte(100000).optional(),
      server_response_timeout: z.number().gte(1).lte(100000).optional(),
    })
    .transform((data) => ({
      protocol: data['protocol'],
      port: data['port'],
      auth: data['auth'],
      loadBalancer: data['load_balancer'],
      singleConnectionLimit: data['single_connection_limit'],
      clientRequestTimeout: data['client_request_timeout'],
      serverResponseTimeout: data['server_response_timeout'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createContainerGroupNetworkingRequest = z.lazy(() => {
  return z
    .object({
      protocol: z.string().nullish(),
      port: z.number().nullish(),
      auth: z.boolean().nullish(),
      loadBalancer: z.string().nullish(),
      singleConnectionLimit: z.boolean().nullish(),
      clientRequestTimeout: z.number().nullish(),
      serverResponseTimeout: z.number().nullish(),
    })
    .transform((data) => ({
      protocol: data['protocol'],
      port: data['port'],
      auth: data['auth'],
      load_balancer: data['loadBalancer'],
      single_connection_limit: data['singleConnectionLimit'],
      client_request_timeout: data['clientRequestTimeout'],
      server_response_timeout: data['serverResponseTimeout'],
    }));
});
