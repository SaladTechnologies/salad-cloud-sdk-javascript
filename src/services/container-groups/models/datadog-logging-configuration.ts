import { z } from 'zod';
import {
  DatadogTagForContainerLogging,
  datadogTagForContainerLogging,
  datadogTagForContainerLoggingRequest,
  datadogTagForContainerLoggingResponse,
} from './datadog-tag-for-container-logging';

/**
 * Zod schema for the DatadogLoggingConfiguration model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const datadogLoggingConfiguration = z.lazy(() => {
  return z.object({
    apiKey: z.string().min(1).max(1000).regex(/^.*$/),
    host: z.string().min(1).max(1000).regex(/^.*$/),
    tags: z.array(datadogTagForContainerLogging).max(1000).nullable(),
  });
});

/**
 * Configuration for forwarding container logs to Datadog monitoring service.
 * @typedef  {DatadogLoggingConfiguration} datadogLoggingConfiguration - Configuration for forwarding container logs to Datadog monitoring service. - Configuration for forwarding container logs to Datadog monitoring service.
 * @property {string} - The Datadog API key used for authentication when sending logs.
 * @property {string} - The Datadog intake server host URL where logs will be sent.
 * @property {DatadogTagForContainerLogging[]} - Optional metadata tags to attach to logs for filtering and categorization in Datadog.
 */
export type DatadogLoggingConfiguration = z.infer<typeof datadogLoggingConfiguration>;

/**
 * Zod schema for mapping API responses to the DatadogLoggingConfiguration application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const datadogLoggingConfigurationResponse = z.lazy(() => {
  return z
    .object({
      api_key: z.string().min(1).max(1000).regex(/^.*$/),
      host: z.string().min(1).max(1000).regex(/^.*$/),
      tags: z.array(datadogTagForContainerLoggingResponse).max(1000).nullable(),
    })
    .transform((data) => ({
      apiKey: data['api_key'],
      host: data['host'],
      tags: data['tags'],
    }));
});

/**
 * Zod schema for mapping the DatadogLoggingConfiguration application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const datadogLoggingConfigurationRequest = z.lazy(() => {
  return z
    .object({
      apiKey: z.string().min(1).max(1000).regex(/^.*$/),
      host: z.string().min(1).max(1000).regex(/^.*$/),
      tags: z.array(datadogTagForContainerLoggingRequest).max(1000).nullable(),
    })
    .transform((data) => ({
      api_key: data['apiKey'],
      host: data['host'],
      tags: data['tags'],
    }));
});
