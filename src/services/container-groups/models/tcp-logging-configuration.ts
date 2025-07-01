import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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
