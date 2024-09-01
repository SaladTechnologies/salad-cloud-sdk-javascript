import { z } from 'zod';
import { datadogTags3, datadogTags3Request, datadogTags3Response } from './datadog-tags-3';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loggingDatadog3 = z.lazy(() => {
  return z.object({
    host: z.string().min(1).max(1000),
    apiKey: z.string().min(1).max(1000),
    tags: z.array(datadogTags3).max(1000).optional().nullable(),
  });
});

/**
 *
 * @typedef  {LoggingDatadog3} loggingDatadog3
 * @property {string}
 * @property {string}
 * @property {DatadogTags3[]}
 */
export type LoggingDatadog3 = z.infer<typeof loggingDatadog3>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loggingDatadog3Response = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000),
      api_key: z.string().min(1).max(1000),
      tags: z.array(datadogTags3Response).max(1000).optional().nullable(),
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
export const loggingDatadog3Request = z.lazy(() => {
  return z
    .object({ host: z.string().nullish(), apiKey: z.string().nullish(), tags: z.array(datadogTags3Request).nullish() })
    .transform((data) => ({
      host: data['host'],
      api_key: data['apiKey'],
      tags: data['tags'],
    }));
});
