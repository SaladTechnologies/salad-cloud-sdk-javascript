import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loggingSplunk2 = z.lazy(() => {
  return z.object({
    host: z.string().min(1).max(1000),
    token: z.string().min(1).max(1000),
  });
});

/**
 *
 * @typedef  {LoggingSplunk2} loggingSplunk2
 * @property {string}
 * @property {string}
 */
export type LoggingSplunk2 = z.infer<typeof loggingSplunk2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loggingSplunk2Response = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000),
      token: z.string().min(1).max(1000),
    })
    .transform((data) => ({
      host: data['host'],
      token: data['token'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loggingSplunk2Request = z.lazy(() => {
  return z.object({ host: z.string().nullish(), token: z.string().nullish() }).transform((data) => ({
    host: data['host'],
    token: data['token'],
  }));
});
