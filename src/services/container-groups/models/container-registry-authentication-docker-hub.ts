import { z } from 'zod';

/**
 * Zod schema for the ContainerRegistryAuthenticationDockerHub model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerRegistryAuthenticationDockerHub = z.lazy(() => {
  return z.object({
    personalAccessToken: z.string().min(1).max(10000).regex(/^.*$/),
    username: z.string().min(1).max(10000).regex(/^.*$/),
  });
});

/**
 * Authentication details for Docker Hub registry
 * @typedef  {ContainerRegistryAuthenticationDockerHub} containerRegistryAuthenticationDockerHub - Authentication details for Docker Hub registry - Authentication details for Docker Hub registry
 * @property {string} - Docker Hub personal access token (PAT)
 * @property {string} - Docker Hub username
 */
export type ContainerRegistryAuthenticationDockerHub = z.infer<typeof containerRegistryAuthenticationDockerHub>;

/**
 * Zod schema for mapping API responses to the ContainerRegistryAuthenticationDockerHub application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerRegistryAuthenticationDockerHubResponse = z.lazy(() => {
  return z
    .object({
      personal_access_token: z.string().min(1).max(10000).regex(/^.*$/),
      username: z.string().min(1).max(10000).regex(/^.*$/),
    })
    .transform((data) => ({
      personalAccessToken: data['personal_access_token'],
      username: data['username'],
    }));
});

/**
 * Zod schema for mapping the ContainerRegistryAuthenticationDockerHub application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerRegistryAuthenticationDockerHubRequest = z.lazy(() => {
  return z
    .object({
      personalAccessToken: z.string().min(1).max(10000).regex(/^.*$/),
      username: z.string().min(1).max(10000).regex(/^.*$/),
    })
    .transform((data) => ({
      personal_access_token: data['personalAccessToken'],
      username: data['username'],
    }));
});
