import { z } from 'zod';
import { datadogTags2, datadogTags2Request, datadogTags2Response } from './datadog-tags-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loggingDatadog2 = z.lazy(() => {
  return z.object({
    host: z.string().min(1).max(1000),
    apiKey: z.string().min(1).max(1000),
    tags: z.array(datadogTags2).max(1000).optional().nullable(),
  });
});

/**
 *
 * @typedef  {LoggingDatadog2} loggingDatadog2
 * @property {string}
 * @property {string}
 * @property {DatadogTags2[]}
 */
export type LoggingDatadog2 = z.infer<typeof loggingDatadog2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loggingDatadog2Response = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000),
      api_key: z.string().min(1).max(1000),
      tags: z.array(datadogTags2Response).max(1000).optional().nullable(),
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
export const loggingDatadog2Request = z.lazy(() => {
  return z
    .object({ host: z.string().nullish(), apiKey: z.string().nullish(), tags: z.array(datadogTags2Request).nullish() })
    .transform((data) => ({
      host: data['host'],
      api_key: data['apiKey'],
      tags: data['tags'],
    }));
});
