import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerRegistryAuthenticationDockerHub = z.lazy(() => {
  return z.object({
    username: z.string().min(1).max(1000).regex(/^.*$/),
    personalAccessToken: z.string().min(1).max(1000).regex(/^.*$/),
  });
});

/**
 * Authentication details for Docker Hub registry
 * @typedef  {ContainerRegistryAuthenticationDockerHub} containerRegistryAuthenticationDockerHub - Authentication details for Docker Hub registry - Authentication details for Docker Hub registry
 * @property {string} - Docker Hub username
 * @property {string} - Docker Hub personal access token (PAT)
 */
export type ContainerRegistryAuthenticationDockerHub = z.infer<typeof containerRegistryAuthenticationDockerHub>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerRegistryAuthenticationDockerHubResponse = z.lazy(() => {
  return z
    .object({
      username: z.string().min(1).max(1000).regex(/^.*$/),
      personal_access_token: z.string().min(1).max(1000).regex(/^.*$/),
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
export const containerRegistryAuthenticationDockerHubRequest = z.lazy(() => {
  return z
    .object({
      username: z.string().min(1).max(1000).regex(/^.*$/),
      personalAccessToken: z.string().min(1).max(1000).regex(/^.*$/),
    })
    .transform((data) => ({
      username: data['username'],
      personal_access_token: data['personalAccessToken'],
    }));
});
