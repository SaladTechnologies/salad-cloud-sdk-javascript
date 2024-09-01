import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const httpHeaders1 = z.lazy(() => {
  return z.object({
    name: z.string(),
    value: z.string(),
  });
});

/**
 *
 * @typedef  {HttpHeaders1} httpHeaders1
 * @property {string}
 * @property {string}
 */
export type HttpHeaders1 = z.infer<typeof httpHeaders1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const httpHeaders1Response = z.lazy(() => {
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
export const httpHeaders1Request = z.lazy(() => {
  return z.object({ name: z.string().nullish(), value: z.string().nullish() }).transform((data) => ({
    name: data['name'],
    value: data['value'],
  }));
});
