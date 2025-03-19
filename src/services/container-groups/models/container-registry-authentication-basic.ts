import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerRegistryAuthenticationBasic = z.lazy(() => {
  return z.object({
    username: z.string().min(1).max(1000).regex(/^.*$/),
    password: z.string().min(1).max(1000).regex(/^.*$/),
  });
});

/**
 * Basic username and password authentication for generic container registries
 * @typedef  {ContainerRegistryAuthenticationBasic} containerRegistryAuthenticationBasic - Basic username and password authentication for generic container registries - Basic username and password authentication for generic container registries
 * @property {string} - Username for registry authentication
 * @property {string} - Password for registry authentication
 */
export type ContainerRegistryAuthenticationBasic = z.infer<typeof containerRegistryAuthenticationBasic>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerRegistryAuthenticationBasicResponse = z.lazy(() => {
  return z
    .object({
      username: z.string().min(1).max(1000).regex(/^.*$/),
      password: z.string().min(1).max(1000).regex(/^.*$/),
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
export const containerRegistryAuthenticationBasicRequest = z.lazy(() => {
  return z.object({ username: z.string(), password: z.string() }).transform((data) => ({
    username: data['username'],
    password: data['password'],
  }));
});
