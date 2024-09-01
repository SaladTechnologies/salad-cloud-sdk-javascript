import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const registryAuthenticationDockerHub2 = z.lazy(() => {
  return z.object({
    username: z.string(),
    personalAccessToken: z.string(),
  });
});

/**
 *
 * @typedef  {RegistryAuthenticationDockerHub2} registryAuthenticationDockerHub2
 * @property {string}
 * @property {string}
 */
export type RegistryAuthenticationDockerHub2 = z.infer<typeof registryAuthenticationDockerHub2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const registryAuthenticationDockerHub2Response = z.lazy(() => {
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
export const registryAuthenticationDockerHub2Request = z.lazy(() => {
  return z.object({ username: z.string().nullish(), personalAccessToken: z.string().nullish() }).transform((data) => ({
    username: data['username'],
    personal_access_token: data['personalAccessToken'],
  }));
});
