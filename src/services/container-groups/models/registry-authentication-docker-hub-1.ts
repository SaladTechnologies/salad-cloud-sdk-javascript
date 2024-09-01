import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const registryAuthenticationDockerHub1 = z.lazy(() => {
  return z.object({
    username: z.string(),
    personalAccessToken: z.string(),
  });
});

/**
 *
 * @typedef  {RegistryAuthenticationDockerHub1} registryAuthenticationDockerHub1
 * @property {string}
 * @property {string}
 */
export type RegistryAuthenticationDockerHub1 = z.infer<typeof registryAuthenticationDockerHub1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const registryAuthenticationDockerHub1Response = z.lazy(() => {
  return z
    .object({
      username: z.string(),
      personal_access_token: z.string(),
    })
    .transform((data) => ({
      username: data['username'],
      personalAccessToken: data['personal_access_token'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const registryAuthenticationDockerHub1Request = z.lazy(() => {
  return z.object({ username: z.string().nullish(), personalAccessToken: z.string().nullish() }).transform((data) => ({
    username: data['username'],
    personal_access_token: data['personalAccessToken'],
  }));
});
