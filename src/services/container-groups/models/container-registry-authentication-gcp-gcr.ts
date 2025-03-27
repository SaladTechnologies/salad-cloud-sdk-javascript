import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerRegistryAuthenticationGcpGcr = z.lazy(() => {
  return z.object({
    serviceKey: z.string().min(1).max(10000).regex(/^.*$/),
  });
});

/**
 * Authentication details for Google Container Registry (GCR)
 * @typedef  {ContainerRegistryAuthenticationGcpGcr} containerRegistryAuthenticationGcpGcr - Authentication details for Google Container Registry (GCR) - Authentication details for Google Container Registry (GCR)
 * @property {string} - GCP service account key in JSON format for GCR authentication
 */
export type ContainerRegistryAuthenticationGcpGcr = z.infer<typeof containerRegistryAuthenticationGcpGcr>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerRegistryAuthenticationGcpGcrResponse = z.lazy(() => {
  return z
    .object({
      service_key: z.string().min(1).max(10000).regex(/^.*$/),
    })
    .transform((data) => ({
      serviceKey: data['service_key'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerRegistryAuthenticationGcpGcrRequest = z.lazy(() => {
  return z
    .object({
      serviceKey: z.string().min(1).max(10000).regex(/^.*$/),
    })
    .transform((data) => ({
      service_key: data['serviceKey'],
    }));
});
