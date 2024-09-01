import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const httpHeaders3 = z.lazy(() => {
  return z.object({
    name: z.string(),
    value: z.string(),
  });
});

/**
 *
 * @typedef  {HttpHeaders3} httpHeaders3
 * @property {string}
 * @property {string}
 */
export type HttpHeaders3 = z.infer<typeof httpHeaders3>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const httpHeaders3Response = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      value: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
      value: data['value'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const httpHeaders3Request = z.lazy(() => {
  return z.object({ name: z.string().nullish(), value: z.string().nullish() }).transform((data) => ({
    name: data['name'],
    value: data['value'],
  }));
});
