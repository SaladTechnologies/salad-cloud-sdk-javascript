import { z } from 'zod';
import {
  DatadogTagForContainerLogging,
  datadogTagForContainerLogging,
  datadogTagForContainerLoggingRequest,
  datadogTagForContainerLoggingResponse,
} from './datadog-tag-for-container-logging';

/**
 * The shape of the model inside the application code - what the users use
 */
export const datadogLoggingConfiguration = z.lazy(() => {
  return z.object({
    host: z.string().min(1).max(1000).regex(/^.*$/),
    apiKey: z.string().min(1).max(1000).regex(/^.*$/),
    tags: z.array(datadogTagForContainerLogging).max(1000).nullable(),
  });
});

/**
 * Configuration for forwarding container logs to Datadog monitoring service.
 * @typedef  {DatadogLoggingConfiguration} datadogLoggingConfiguration - Configuration for forwarding container logs to Datadog monitoring service. - Configuration for forwarding container logs to Datadog monitoring service.
 * @property {string} - The Datadog intake server host URL where logs will be sent.
 * @property {string} - The Datadog API key used for authentication when sending logs.
 * @property {DatadogTagForContainerLogging[]} - Optional metadata tags to attach to logs for filtering and categorization in Datadog.
 */
export type DatadogLoggingConfiguration = z.infer<typeof datadogLoggingConfiguration>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const datadogLoggingConfigurationResponse = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000).regex(/^.*$/),
      api_key: z.string().min(1).max(1000).regex(/^.*$/),
      tags: z.array(datadogTagForContainerLoggingResponse).max(1000).nullable(),
    })
    .transform((data) => ({
      host: data['host'],
      apiKey: data['api_key'],
      tags: data['tags'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const datadogLoggingConfigurationRequest = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000).regex(/^.*$/),
      apiKey: z.string().min(1).max(1000).regex(/^.*$/),
      tags: z.array(datadogTagForContainerLoggingRequest).max(1000).nullable(),
    })
    .transform((data) => ({
      host: data['host'],
      api_key: data['apiKey'],
      tags: data['tags'],
    }));
});
