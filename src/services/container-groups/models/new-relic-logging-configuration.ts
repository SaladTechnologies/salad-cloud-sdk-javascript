import { z } from 'zod';

/**
 * Zod schema for the NewRelicLoggingConfiguration model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const newRelicLoggingConfiguration = z.lazy(() => {
  return z.object({
    host: z.string().min(1).max(1000).regex(/^.*$/),
    ingestionKey: z.string().min(1).max(1000).regex(/^.*$/),
  });
});

/**
 * Configuration for sending container logs to New Relic's log management platform.
 * @typedef  {NewRelicLoggingConfiguration} newRelicLoggingConfiguration - Configuration for sending container logs to New Relic's log management platform. - Configuration for sending container logs to New Relic's log management platform.
 * @property {string} - The New Relic endpoint host for log ingestion (e.g., log-api.newrelic.com).
 * @property {string} - The New Relic license or ingestion key used for authentication and data routing.
 */
export type NewRelicLoggingConfiguration = z.infer<typeof newRelicLoggingConfiguration>;

/**
 * Zod schema for mapping API responses to the NewRelicLoggingConfiguration application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const newRelicLoggingConfigurationResponse = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000).regex(/^.*$/),
      ingestion_key: z.string().min(1).max(1000).regex(/^.*$/),
    })
    .transform((data) => ({
      host: data['host'],
      ingestionKey: data['ingestion_key'],
    }));
});

/**
 * Zod schema for mapping the NewRelicLoggingConfiguration application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const newRelicLoggingConfigurationRequest = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000).regex(/^.*$/),
      ingestionKey: z.string().min(1).max(1000).regex(/^.*$/),
    })
    .transform((data) => ({
      host: data['host'],
      ingestion_key: data['ingestionKey'],
    }));
});
