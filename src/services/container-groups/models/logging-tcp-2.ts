import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loggingTcp2 = z.lazy(() => {
  return z.object({
    host: z.string().min(1).max(1000),
    port: z.number().gte(1).lte(65535),
  });
});

/**
 *
 * @typedef  {LoggingTcp2} loggingTcp2
 * @property {string}
 * @property {number}
 */
export type LoggingTcp2 = z.infer<typeof loggingTcp2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loggingTcp2Response = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000),
      port: z.number().gte(1).lte(65535),
    })
    .transform((data) => ({
      host: data['host'],
      port: data['port'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loggingTcp2Request = z.lazy(() => {
  return z.object({ host: z.string().nullish(), port: z.number().nullish() }).transform((data) => ({
    host: data['host'],
    port: data['port'],
  }));
});
