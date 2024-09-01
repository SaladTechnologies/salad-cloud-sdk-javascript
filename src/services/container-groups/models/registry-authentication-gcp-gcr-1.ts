import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const registryAuthenticationGcpGcr1 = z.lazy(() => {
  return z.object({
    serviceKey: z.string(),
  });
});

/**
 *
 * @typedef  {RegistryAuthenticationGcpGcr1} registryAuthenticationGcpGcr1
 * @property {string}
 */
export type RegistryAuthenticationGcpGcr1 = z.infer<typeof registryAuthenticationGcpGcr1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const registryAuthenticationGcpGcr1Response = z.lazy(() => {
  return z
    .object({
      service_key: z.string(),
    })
    .transform((data) => ({
      serviceKey: data['service_key'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const registryAuthenticationGcpGcr1Request = z.lazy(() => {
  return z.object({ serviceKey: z.string().nullish() }).transform((data) => ({
    service_key: data['serviceKey'],
  }));
});
