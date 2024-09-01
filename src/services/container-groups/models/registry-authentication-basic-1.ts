import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const registryAuthenticationBasic1 = z.lazy(() => {
  return z.object({
    username: z.string(),
    password: z.string(),
  });
});

/**
 *
 * @typedef  {RegistryAuthenticationBasic1} registryAuthenticationBasic1
 * @property {string}
 * @property {string}
 */
export type RegistryAuthenticationBasic1 = z.infer<typeof registryAuthenticationBasic1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const registryAuthenticationBasic1Response = z.lazy(() => {
  return z
    .object({
      username: z.string(),
      password: z.string(),
    })
    .transform((data) => ({
      username: data['username'],
      password: data['password'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const registryAuthenticationBasic1Request = z.lazy(() => {
  return z.object({ username: z.string().nullish(), password: z.string().nullish() }).transform((data) => ({
    username: data['username'],
    password: data['password'],
  }));
});
