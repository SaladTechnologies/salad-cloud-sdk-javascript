import { z } from 'zod';
import {
  ContainerGroupProbeHttpHeader,
  containerGroupProbeHttpHeader,
  containerGroupProbeHttpHeaderRequest,
  containerGroupProbeHttpHeaderResponse,
} from './container-group-probe-http-header';

/**
 * Zod schema for the ContainerGroupHttpProbeConfiguration model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerGroupHttpProbeConfiguration = z.lazy(() => {
  return z.object({
    headers: z.array(containerGroupProbeHttpHeader).min(1).max(50),
    path: z.string().min(1).max(2048).regex(/^.*$/),
    port: z.number().gte(0).lte(65536),
    scheme: z.string().nullable(),
  });
});

/**
 * Defines HTTP probe configuration for container health checks within a container group.
 * @typedef  {ContainerGroupHttpProbeConfiguration} containerGroupHttpProbeConfiguration - Defines HTTP probe configuration for container health checks within a container group. - Defines HTTP probe configuration for container health checks within a container group.
 * @property {ContainerGroupProbeHttpHeader[]} - A collection of HTTP header name-value pairs used for configuring requests and responses in container group endpoints. Each header consists of a name and its corresponding value.
 * @property {string} - The HTTP path that will be probed to check container health.
 * @property {number} - The TCP port number to which the HTTP request will be sent.
 * @property {HttpScheme} - The protocol scheme used for HTTP probe requests in container health checks.
 */
export type ContainerGroupHttpProbeConfiguration = z.infer<typeof containerGroupHttpProbeConfiguration>;

/**
 * Zod schema for mapping API responses to the ContainerGroupHttpProbeConfiguration application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupHttpProbeConfigurationResponse = z.lazy(() => {
  return z
    .object({
      headers: z.array(containerGroupProbeHttpHeaderResponse).min(1).max(50),
      path: z.string().min(1).max(2048).regex(/^.*$/),
      port: z.number().gte(0).lte(65536),
      scheme: z.string().nullable(),
    })
    .transform((data) => ({
      headers: data['headers'],
      path: data['path'],
      port: data['port'],
      scheme: data['scheme'],
    }));
});

/**
 * Zod schema for mapping the ContainerGroupHttpProbeConfiguration application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupHttpProbeConfigurationRequest = z.lazy(() => {
  return z
    .object({
      headers: z.array(containerGroupProbeHttpHeaderRequest).min(1).max(50),
      path: z.string().min(1).max(2048).regex(/^.*$/),
      port: z.number().gte(0).lte(65536),
      scheme: z.string().nullable(),
    })
    .transform((data) => ({
      headers: data['headers'],
      path: data['path'],
      port: data['port'],
      scheme: data['scheme'],
    }));
});
