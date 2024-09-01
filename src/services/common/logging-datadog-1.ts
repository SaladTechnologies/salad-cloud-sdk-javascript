import { z } from 'zod';
import { datadogTags1, datadogTags1Request, datadogTags1Response } from './datadog-tags-1';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loggingDatadog1 = z.lazy(() => {
  return z.object({
    host: z.string().min(1).max(1000),
    apiKey: z.string().min(1).max(1000),
    tags: z.array(datadogTags1).max(1000).optional().nullable(),
  });
});

/**
 *
 * @typedef  {LoggingDatadog1} loggingDatadog1
 * @property {string}
 * @property {string}
 * @property {DatadogTags1[]}
 */
export type LoggingDatadog1 = z.infer<typeof loggingDatadog1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loggingDatadog1Response = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000),
      api_key: z.string().min(1).max(1000),
      tags: z.array(datadogTags1Response).max(1000).optional().nullable(),
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
export const loggingDatadog1Request = z.lazy(() => {
  return z
    .object({ host: z.string().nullish(), apiKey: z.string().nullish(), tags: z.array(datadogTags1Request).nullish() })
    .transform((data) => ({
      host: data['host'],
      api_key: data['apiKey'],
      tags: data['tags'],
    }));
});
