import { z } from 'zod';

/**
 * Zod schema for the ContainerRegistryAuthenticationGcpGar model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerRegistryAuthenticationGcpGar = z.lazy(() => {
  return z.object({
    serviceKey: z.string().min(1).max(10000),
  });
});

/**
 * Authentication details for Google Artifact Registry (GAR)
 * @typedef  {ContainerRegistryAuthenticationGcpGar} containerRegistryAuthenticationGcpGar - Authentication details for Google Artifact Registry (GAR) - Authentication details for Google Artifact Registry (GAR)
 * @property {string} - GCP service account key in JSON format for GAR authentication
 */
export type ContainerRegistryAuthenticationGcpGar = z.infer<typeof containerRegistryAuthenticationGcpGar>;

/**
 * Zod schema for mapping API responses to the ContainerRegistryAuthenticationGcpGar application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerRegistryAuthenticationGcpGarResponse = z.lazy(() => {
  return z
    .object({
      service_key: z.string().min(1).max(10000),
    })
    .transform((data) => ({
      serviceKey: data['service_key'],
    }));
});

/**
 * Zod schema for mapping the ContainerRegistryAuthenticationGcpGar application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerRegistryAuthenticationGcpGarRequest = z.lazy(() => {
  return z
    .object({
      serviceKey: z.string().min(1).max(10000),
    })
    .transform((data) => ({
      service_key: data['serviceKey'],
    }));
});
