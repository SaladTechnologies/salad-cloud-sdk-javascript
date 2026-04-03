import { z } from 'zod';

/**
 * Zod schema for the ContainerRegistryAuthenticationBasic model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerRegistryAuthenticationBasic = z.lazy(() => {
  return z.object({
    password: z.string().min(1).max(10000).regex(/^.*$/),
    username: z.string().min(1).max(10000).regex(/^.*$/),
  });
});

/**
 * Basic username and password authentication for generic container registries
 * @typedef  {ContainerRegistryAuthenticationBasic} containerRegistryAuthenticationBasic - Basic username and password authentication for generic container registries - Basic username and password authentication for generic container registries
 * @property {string} - Password for registry authentication
 * @property {string} - Username for registry authentication
 */
export type ContainerRegistryAuthenticationBasic = z.infer<typeof containerRegistryAuthenticationBasic>;

/**
 * Zod schema for mapping API responses to the ContainerRegistryAuthenticationBasic application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerRegistryAuthenticationBasicResponse = z.lazy(() => {
  return z
    .object({
      password: z.string().min(1).max(10000).regex(/^.*$/),
      username: z.string().min(1).max(10000).regex(/^.*$/),
    })
    .transform((data) => ({
      password: data['password'],
      username: data['username'],
    }));
});

/**
 * Zod schema for mapping the ContainerRegistryAuthenticationBasic application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerRegistryAuthenticationBasicRequest = z.lazy(() => {
  return z
    .object({
      password: z.string().min(1).max(10000).regex(/^.*$/),
      username: z.string().min(1).max(10000).regex(/^.*$/),
    })
    .transform((data) => ({
      password: data['password'],
      username: data['username'],
    }));
});
