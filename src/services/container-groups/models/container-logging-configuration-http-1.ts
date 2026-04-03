import { z } from 'zod';
import {
  ContainerLoggingHttpHeader,
  containerLoggingHttpHeader,
  containerLoggingHttpHeaderRequest,
  containerLoggingHttpHeaderResponse,
} from './container-logging-http-header';

/**
 * Zod schema for the ContainerLoggingConfigurationHttp1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerLoggingConfigurationHttp1 = z.lazy(() => {
  return z.object({
    compression: z.string(),
    format: z.string(),
    headers: z.array(containerLoggingHttpHeader).max(1000).nullable(),
    host: z.string().min(1).max(1000).regex(/^.*$/),
    password: z.string().min(1).max(1000).regex(/^.*$/).optional().nullable(),
    path: z.string().min(1).max(1000).regex(/^.*$/).optional().nullable(),
    port: z.number().gte(1).lte(65535),
    user: z.string().min(1).max(1000).regex(/^.*$/).optional().nullable(),
  });
});

/**
 * Configuration for sending container logs to an HTTP endpoint. Defines how logs are formatted, compressed, and transmitted.
 * @typedef  {ContainerLoggingConfigurationHttp1} containerLoggingConfigurationHttp1 - Configuration for sending container logs to an HTTP endpoint. Defines how logs are formatted, compressed, and transmitted. - Configuration for sending container logs to an HTTP endpoint. Defines how logs are formatted, compressed, and transmitted.
 * @property {ContainerLoggingHttpCompression} - The compression algorithm to apply to logs before transmission
 * @property {ContainerLoggingHttpFormat} - The format in which logs will be delivered
 * @property {ContainerLoggingHttpHeader[]} - Optional HTTP headers to include in log transmission requests
 * @property {string} - The hostname or IP address of the HTTP logging endpoint
 * @property {string} - Optional password for HTTP authentication
 * @property {string} - Optional URL path for the HTTP endpoint
 * @property {number} - The port number of the HTTP logging endpoint (1-65535)
 * @property {string} - Optional username for HTTP authentication
 */
export type ContainerLoggingConfigurationHttp1 = z.infer<typeof containerLoggingConfigurationHttp1>;

/**
 * Zod schema for mapping API responses to the ContainerLoggingConfigurationHttp1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerLoggingConfigurationHttp1Response = z.lazy(() => {
  return z
    .object({
      compression: z.string(),
      format: z.string(),
      headers: z.array(containerLoggingHttpHeaderResponse).max(1000).nullable(),
      host: z.string().min(1).max(1000).regex(/^.*$/),
      password: z.string().min(1).max(1000).regex(/^.*$/).optional().nullable(),
      path: z.string().min(1).max(1000).regex(/^.*$/).optional().nullable(),
      port: z.number().gte(1).lte(65535),
      user: z.string().min(1).max(1000).regex(/^.*$/).optional().nullable(),
    })
    .transform((data) => ({
      compression: data['compression'],
      format: data['format'],
      headers: data['headers'],
      host: data['host'],
      password: data['password'],
      path: data['path'],
      port: data['port'],
      user: data['user'],
    }));
});

/**
 * Zod schema for mapping the ContainerLoggingConfigurationHttp1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerLoggingConfigurationHttp1Request = z.lazy(() => {
  return z
    .object({
      compression: z.string(),
      format: z.string(),
      headers: z.array(containerLoggingHttpHeaderRequest).max(1000).nullable(),
      host: z.string().min(1).max(1000).regex(/^.*$/),
      password: z.string().min(1).max(1000).regex(/^.*$/).optional().nullable(),
      path: z.string().min(1).max(1000).regex(/^.*$/).optional().nullable(),
      port: z.number().gte(1).lte(65535),
      user: z.string().min(1).max(1000).regex(/^.*$/).optional().nullable(),
    })
    .transform((data) => ({
      compression: data['compression'],
      format: data['format'],
      headers: data['headers'],
      host: data['host'],
      password: data['password'],
      path: data['path'],
      port: data['port'],
      user: data['user'],
    }));
});
