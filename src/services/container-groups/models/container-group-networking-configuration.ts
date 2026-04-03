import { z } from 'zod';

/**
 * Zod schema for the ContainerGroupNetworkingConfiguration model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the ContainerGroupNetworkingConfiguration application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the ContainerGroupNetworkingConfiguration application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupNetworkingConfigurationRequest = z.lazy(() => {
  return z
    .object({
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
