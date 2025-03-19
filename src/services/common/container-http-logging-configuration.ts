import { z } from 'zod';
import {
  containerLoggingHttpHeader,
  containerLoggingHttpHeaderRequest,
  containerLoggingHttpHeaderResponse,
} from './container-logging-http-header';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerHttpLoggingConfiguration = z.lazy(() => {
  return z.object({
    host: z.string().min(1).max(1000).regex(/^.*$/),
    port: z.number().gte(1).lte(65535),
    user: z.string().min(1).max(1000).regex(/^.*$/).optional().nullable(),
    password: z.string().min(1).max(1000).regex(/^.*$/).optional().nullable(),
    path: z.string().min(1).max(1000).regex(/^.*$/).optional().nullable(),
    format: z.string(),
    headers: z.array(containerLoggingHttpHeader).max(1000).nullable(),
    compression: z.string(),
  });
});

/**
 * Configuration for sending container logs to an HTTP endpoint. Defines how logs are formatted, compressed, and transmitted.
 * @typedef  {ContainerHttpLoggingConfiguration} containerHttpLoggingConfiguration - Configuration for sending container logs to an HTTP endpoint. Defines how logs are formatted, compressed, and transmitted. - Configuration for sending container logs to an HTTP endpoint. Defines how logs are formatted, compressed, and transmitted.
 * @property {string} - The hostname or IP address of the HTTP logging endpoint
 * @property {number} - The port number of the HTTP logging endpoint (1-65535)
 * @property {string} - Optional username for HTTP authentication
 * @property {string} - Optional password for HTTP authentication
 * @property {string} - Optional URL path for the HTTP endpoint
 * @property {Format} - The format in which logs will be delivered
 * @property {ContainerLoggingHttpHeader[]} - Optional HTTP headers to include in log transmission requests
 * @property {Compression} - The compression algorithm to apply to logs before transmission
 */
export type ContainerHttpLoggingConfiguration = z.infer<typeof containerHttpLoggingConfiguration>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerHttpLoggingConfigurationResponse = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000).regex(/^.*$/),
      port: z.number().gte(1).lte(65535),
      user: z.string().min(1).max(1000).regex(/^.*$/).optional().nullable(),
      password: z.string().min(1).max(1000).regex(/^.*$/).optional().nullable(),
      path: z.string().min(1).max(1000).regex(/^.*$/).optional().nullable(),
      format: z.string(),
      headers: z.array(containerLoggingHttpHeaderResponse).max(1000).nullable(),
      compression: z.string(),
    })
    .transform((data) => ({
      host: data['host'],
      port: data['port'],
      user: data['user'],
      password: data['password'],
      path: data['path'],
      format: data['format'],
      headers: data['headers'],
      compression: data['compression'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerHttpLoggingConfigurationRequest = z.lazy(() => {
  return z
    .object({
      host: z.string(),
      port: z.number(),
      user: z.string().nullable().optional(),
      password: z.string().nullable().optional(),
      path: z.string().nullable().optional(),
      format: z.string(),
      headers: z.array(containerLoggingHttpHeaderRequest).nullable(),
      compression: z.string(),
    })
    .transform((data) => ({
      host: data['host'],
      port: data['port'],
      user: data['user'],
      password: data['password'],
      path: data['path'],
      format: data['format'],
      headers: data['headers'],
      compression: data['compression'],
    }));
});
