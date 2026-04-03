import { z } from 'zod';

/**
 * Zod schema for the ContainerRegistryAuthenticationGcpGcr model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerRegistryAuthenticationGcpGcr = z.lazy(() => {
  return z.object({
    serviceKey: z.string().min(1).max(10000),
  });
});

/**
 * Authentication details for Google Container Registry (GCR)
 * @typedef  {ContainerRegistryAuthenticationGcpGcr} containerRegistryAuthenticationGcpGcr - Authentication details for Google Container Registry (GCR) - Authentication details for Google Container Registry (GCR)
 * @property {string} - GCP service account key in JSON format for GCR authentication
 */
export type ContainerRegistryAuthenticationGcpGcr = z.infer<typeof containerRegistryAuthenticationGcpGcr>;

/**
 * Zod schema for mapping API responses to the ContainerRegistryAuthenticationGcpGcr application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerRegistryAuthenticationGcpGcrResponse = z.lazy(() => {
  return z
    .object({
      service_key: z.string().min(1).max(10000),
    })
    .transform((data) => ({
      serviceKey: data['service_key'],
    }));
});

/**
 * Zod schema for mapping the ContainerRegistryAuthenticationGcpGcr application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerRegistryAuthenticationGcpGcrRequest = z.lazy(() => {
  return z
    .object({
      serviceKey: z.string().min(1).max(10000),
    })
    .transform((data) => ({
      service_key: data['serviceKey'],
    }));
});
