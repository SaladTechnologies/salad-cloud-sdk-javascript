import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerLoggingSplunkConfigurationRequest = z.lazy(() => {
  return z.object({ host: z.string(), token: z.string() }).transform((data) => ({
    host: data['host'],
    token: data['token'],
  }));
});
