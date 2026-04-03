import { z } from 'zod';

/**
 * Zod schema for the TcpLoggingConfiguration model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const tcpLoggingConfiguration = z.lazy(() => {
  return z.object({
    host: z.string().min(1).max(1000).regex(/^.*$/),
    port: z.number().gte(1).lte(65535),
  });
});

/**
 * Configuration for forwarding container logs to a remote TCP endpoint
 * @typedef  {TcpLoggingConfiguration} tcpLoggingConfiguration - Configuration for forwarding container logs to a remote TCP endpoint - Configuration for forwarding container logs to a remote TCP endpoint
 * @property {string} - The hostname or IP address of the remote TCP logging endpoint
 * @property {number} - The port number on which the TCP logging endpoint is listening
 */
export type TcpLoggingConfiguration = z.infer<typeof tcpLoggingConfiguration>;

/**
 * Zod schema for mapping API responses to the TcpLoggingConfiguration application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const tcpLoggingConfigurationResponse = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000).regex(/^.*$/),
      port: z.number().gte(1).lte(65535),
    })
    .transform((data) => ({
      host: data['host'],
      port: data['port'],
    }));
});

/**
 * Zod schema for mapping the TcpLoggingConfiguration application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const tcpLoggingConfigurationRequest = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000).regex(/^.*$/),
      port: z.number().gte(1).lte(65535),
    })
    .transform((data) => ({
      host: data['host'],
      port: data['port'],
    }));
});
