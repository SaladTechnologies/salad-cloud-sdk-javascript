import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loggingSplunk1 = z.lazy(() => {
  return z.object({
    host: z.string().min(1).max(1000),
    token: z.string().min(1).max(1000),
  });
});

/**
 *
 * @typedef  {LoggingSplunk1} loggingSplunk1
 * @property {string}
 * @property {string}
 */
export type LoggingSplunk1 = z.infer<typeof loggingSplunk1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loggingSplunk1Response = z.lazy(() => {
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
export const loggingSplunk1Request = z.lazy(() => {
  return z.object({ host: z.string().nullish(), token: z.string().nullish() }).transform((data) => ({
    host: data['host'],
    token: data['token'],
  }));
});
