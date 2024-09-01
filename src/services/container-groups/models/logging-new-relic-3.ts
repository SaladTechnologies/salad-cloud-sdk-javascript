import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loggingNewRelic3 = z.lazy(() => {
  return z.object({
    host: z.string().min(1).max(1000),
    ingestionKey: z.string().min(1).max(1000),
  });
});

/**
 *
 * @typedef  {LoggingNewRelic3} loggingNewRelic3
 * @property {string}
 * @property {string}
 */
export type LoggingNewRelic3 = z.infer<typeof loggingNewRelic3>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loggingNewRelic3Response = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000),
      ingestion_key: z.string().min(1).max(1000),
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
export const loggingNewRelic3Request = z.lazy(() => {
  return z.object({ host: z.string().nullish(), ingestionKey: z.string().nullish() }).transform((data) => ({
    host: data['host'],
    ingestion_key: data['ingestionKey'],
  }));
});
