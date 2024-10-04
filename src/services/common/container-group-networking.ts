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
    loadBalancer: z.string().optional(),
    singleConnectionLimit: z.boolean().optional(),
    clientRequestTimeout: z.number().gte(1).lte(100000).optional(),
    serverResponseTimeout: z.number().gte(1).lte(100000).optional(),
  });
});

/**
 * Represents container group networking parameters
 * @typedef  {ContainerGroupNetworking} containerGroupNetworking - Represents container group networking parameters - Represents container group networking parameters
 * @property {ContainerNetworkingProtocol}
 * @property {number}
 * @property {boolean}
 * @property {string}
 * @property {ContainerGroupNetworkingLoadBalancer}
 * @property {boolean}
 * @property {number}
 * @property {number}
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
      load_balancer: z.string().optional(),
      single_connection_limit: z.boolean().optional(),
      client_request_timeout: z.number().gte(1).lte(100000).optional(),
      server_response_timeout: z.number().gte(1).lte(100000).optional(),
    })
    .transform((data) => ({
      protocol: data['protocol'],
      port: data['port'],
      auth: data['auth'],
      dns: data['dns'],
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
export const containerGroupNetworkingRequest = z.lazy(() => {
  return z
    .object({
      protocol: z.string().nullish(),
      port: z.number().nullish(),
      auth: z.boolean().nullish(),
      dns: z.string().nullish(),
      loadBalancer: z.string().nullish(),
      singleConnectionLimit: z.boolean().nullish(),
      clientRequestTimeout: z.number().nullish(),
      serverResponseTimeout: z.number().nullish(),
    })
    .transform((data) => ({
      protocol: data['protocol'],
      port: data['port'],
      auth: data['auth'],
      dns: data['dns'],
      load_balancer: data['loadBalancer'],
      single_connection_limit: data['singleConnectionLimit'],
      client_request_timeout: data['clientRequestTimeout'],
      server_response_timeout: data['serverResponseTimeout'],
    }));
});
