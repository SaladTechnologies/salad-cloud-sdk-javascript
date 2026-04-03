import { z } from 'zod';

/**
 * Zod schema for the CreateContainerGroupNetworking model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createContainerGroupNetworking = z.lazy(() => {
  return z.object({
    auth: z.boolean(),
    clientRequestTimeout: z.number().gte(1).lte(100000).optional(),
    loadBalancer: z.string().optional(),
    port: z.number().gte(1).lte(65535),
    protocol: z.string(),
    serverResponseTimeout: z.number().gte(1).lte(100000).optional(),
    singleConnectionLimit: z.boolean().optional(),
  });
});

/**
 * Network configuration for container groups specifying connectivity parameters, including authentication, protocol, and timeout settings
 * @typedef  {CreateContainerGroupNetworking} createContainerGroupNetworking - Network configuration for container groups specifying connectivity parameters, including authentication, protocol, and timeout settings - Network configuration for container groups specifying connectivity parameters, including authentication, protocol, and timeout settings
 * @property {boolean} - Determines whether authentication is required for network connections to the container group
 * @property {number} - The container group networking client request timeout.
 * @property {TheContainerGroupNetworkingLoadBalancer} - The container group networking load balancer.
 * @property {number} - The container group networking port.
 * @property {ContainerNetworkingProtocol} - Defines the communication protocol used for network traffic between containers or external systems. Currently supports HTTP protocol for web-based communication.
 * @property {number} - The container group networking server response timeout.
 * @property {boolean} - The container group networking single connection limit flag.
 */
export type CreateContainerGroupNetworking = z.infer<typeof createContainerGroupNetworking>;

/**
 * Zod schema for mapping API responses to the CreateContainerGroupNetworking application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createContainerGroupNetworkingResponse = z.lazy(() => {
  return z
    .object({
      auth: z.boolean(),
      client_request_timeout: z.number().gte(1).lte(100000).optional(),
      load_balancer: z.string().optional(),
      port: z.number().gte(1).lte(65535),
      protocol: z.string(),
      server_response_timeout: z.number().gte(1).lte(100000).optional(),
      single_connection_limit: z.boolean().optional(),
    })
    .transform((data) => ({
      auth: data['auth'],
      clientRequestTimeout: data['client_request_timeout'],
      loadBalancer: data['load_balancer'],
      port: data['port'],
      protocol: data['protocol'],
      serverResponseTimeout: data['server_response_timeout'],
      singleConnectionLimit: data['single_connection_limit'],
    }));
});

/**
 * Zod schema for mapping the CreateContainerGroupNetworking application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createContainerGroupNetworkingRequest = z.lazy(() => {
  return z
    .object({
      auth: z.boolean(),
      clientRequestTimeout: z.number().gte(1).lte(100000).optional(),
      loadBalancer: z.string().optional(),
      port: z.number().gte(1).lte(65535),
      protocol: z.string(),
      serverResponseTimeout: z.number().gte(1).lte(100000).optional(),
      singleConnectionLimit: z.boolean().optional(),
    })
    .transform((data) => ({
      auth: data['auth'],
      client_request_timeout: data['clientRequestTimeout'],
      load_balancer: data['loadBalancer'],
      port: data['port'],
      protocol: data['protocol'],
      server_response_timeout: data['serverResponseTimeout'],
      single_connection_limit: data['singleConnectionLimit'],
    }));
});
