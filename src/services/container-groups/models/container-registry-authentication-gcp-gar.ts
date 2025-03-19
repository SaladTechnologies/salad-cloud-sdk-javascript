import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerRegistryAuthenticationGcpGar = z.lazy(() => {
  return z.object({
    serviceKey: z.string().min(1).max(1000).regex(/^.*$/),
  });
});

/**
 * Authentication details for Google Artifact Registry (GAR)
 * @typedef  {ContainerRegistryAuthenticationGcpGar} containerRegistryAuthenticationGcpGar - Authentication details for Google Artifact Registry (GAR) - Authentication details for Google Artifact Registry (GAR)
 * @property {string} - GCP service account key in JSON format for GAR authentication
 */
export type ContainerRegistryAuthenticationGcpGar = z.infer<typeof containerRegistryAuthenticationGcpGar>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerRegistryAuthenticationGcpGarResponse = z.lazy(() => {
  return z
    .object({
      service_key: z.string().min(1).max(1000).regex(/^.*$/),
    })
    .transform((data) => ({
      serviceKey: data['service_key'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerRegistryAuthenticationGcpGarRequest = z.lazy(() => {
  return z.object({ serviceKey: z.string() }).transform((data) => ({
    service_key: data['serviceKey'],
  }));
});
