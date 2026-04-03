import { z } from 'zod';

/**
 * Zod schema for the ContainerLoggingSplunkConfiguration model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerLoggingSplunkConfiguration = z.lazy(() => {
  return z.object({
    host: z.string().min(1).max(1000).regex(/^.*$/),
    token: z.string().min(1).max(1000).regex(/^.*$/),
  });
});

/**
 * Configuration settings for forwarding container logs to a Splunk instance.
 * @typedef  {ContainerLoggingSplunkConfiguration} containerLoggingSplunkConfiguration - Configuration settings for forwarding container logs to a Splunk instance. - Configuration settings for forwarding container logs to a Splunk instance.
 * @property {string} - The URL of the Splunk HTTP Event Collector (HEC) endpoint.
 * @property {string} - The authentication token required to send data to the Splunk HEC endpoint.
 */
export type ContainerLoggingSplunkConfiguration = z.infer<typeof containerLoggingSplunkConfiguration>;

/**
 * Zod schema for mapping API responses to the ContainerLoggingSplunkConfiguration application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerLoggingSplunkConfigurationResponse = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000).regex(/^.*$/),
      token: z.string().min(1).max(1000).regex(/^.*$/),
    })
    .transform((data) => ({
      host: data['host'],
      token: data['token'],
    }));
});

/**
 * Zod schema for mapping the ContainerLoggingSplunkConfiguration application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerLoggingSplunkConfigurationRequest = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000).regex(/^.*$/),
      token: z.string().min(1).max(1000).regex(/^.*$/),
    })
    .transform((data) => ({
      host: data['host'],
      token: data['token'],
    }));
});
