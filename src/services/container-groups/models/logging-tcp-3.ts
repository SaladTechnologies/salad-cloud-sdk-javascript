import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loggingTcp3 = z.lazy(() => {
  return z.object({
    host: z.string().min(1).max(1000),
    port: z.number().gte(1).lte(65535),
  });
});

/**
 *
 * @typedef  {LoggingTcp3} loggingTcp3
 * @property {string}
 * @property {number}
 */
export type LoggingTcp3 = z.infer<typeof loggingTcp3>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loggingTcp3Response = z.lazy(() => {
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
export const loggingTcp3Request = z.lazy(() => {
  return z.object({ host: z.string().nullish(), port: z.number().nullish() }).transform((data) => ({
    host: data['host'],
    port: data['port'],
  }));
});
