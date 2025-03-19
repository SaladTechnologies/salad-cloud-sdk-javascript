import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const newRelicLoggingConfigurationRequest = z.lazy(() => {
  return z.object({ host: z.string(), ingestionKey: z.string() }).transform((data) => ({
    host: data['host'],
    ingestion_key: data['ingestionKey'],
  }));
});
