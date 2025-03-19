import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupNetworkingConfiguration = z.lazy(() => {
  return z.object({
    auth: z.boolean(),
    clientRequestTimeout: z.number().gte(1).lte(100000).optional(),
    dns: z
      .string()
      .min(1)
      .max(253)
      .regex(/^([a-z][a-z0-9-]{0,61}[a-z0-9]\.)*[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    loadBalancer: z.string(),
    port: z.number().gte(1).lte(65535),
    protocol: z.string(),
    serverResponseTimeout: z.number().gte(1).lte(100000).optional(),
    singleConnectionLimit: z.boolean().optional(),
  });
});

/**
 * Network configuration for container groups that defines connectivity, routing, and access control settings
 * @typedef  {ContainerGroupNetworkingConfiguration} containerGroupNetworkingConfiguration - Network configuration for container groups that defines connectivity, routing, and access control settings - Network configuration for container groups that defines connectivity, routing, and access control settings
 * @property {boolean} - Whether authentication is required for network access to the container group
 * @property {number} - The container group networking client request timeout.
 * @property {string} - Domain name or URL endpoint for the container group's network interface
 * @property {TheContainerGroupNetworkingLoadBalancer} - The container group networking load balancer.
 * @property {number} - The container group networking port.
 * @property {ContainerNetworkingProtocol} - Defines the communication protocol used for network traffic between containers or external systems. Currently supports HTTP protocol for web-based communication.
 * @property {number} - The container group networking server response timeout.
 * @property {boolean} - The container group networking single connection limit flag.
 */
export type ContainerGroupNetworkingConfiguration = z.infer<typeof containerGroupNetworkingConfiguration>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupNetworkingConfigurationResponse = z.lazy(() => {
  return z
    .object({
      auth: z.boolean(),
      client_request_timeout: z.number().gte(1).lte(100000).optional(),
      dns: z
        .string()
        .min(1)
        .max(253)
        .regex(/^([a-z][a-z0-9-]{0,61}[a-z0-9]\.)*[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      load_balancer: z.string(),
      port: z.number().gte(1).lte(65535),
      protocol: z.string(),
      server_response_timeout: z.number().gte(1).lte(100000).optional(),
      single_connection_limit: z.boolean().optional(),
    })
    .transform((data) => ({
      auth: data['auth'],
      clientRequestTimeout: data['client_request_timeout'],
      dns: data['dns'],
      loadBalancer: data['load_balancer'],
      port: data['port'],
      protocol: data['protocol'],
      serverResponseTimeout: data['server_response_timeout'],
      singleConnectionLimit: data['single_connection_limit'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupNetworkingConfigurationRequest = z.lazy(() => {
  return z
    .object({
      auth: z.boolean(),
      clientRequestTimeout: z.number().optional(),
      dns: z.string(),
      loadBalancer: z.string(),
      port: z.number(),
      protocol: z.string(),
      serverResponseTimeout: z.number().optional(),
      singleConnectionLimit: z.boolean().optional(),
    })
    .transform((data) => ({
      auth: data['auth'],
      client_request_timeout: data['clientRequestTimeout'],
      dns: data['dns'],
      load_balancer: data['loadBalancer'],
      port: data['port'],
      protocol: data['protocol'],
      server_response_timeout: data['serverResponseTimeout'],
      single_connection_limit: data['singleConnectionLimit'],
    }));
});
