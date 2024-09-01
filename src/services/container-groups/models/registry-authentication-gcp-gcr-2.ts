import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const registryAuthenticationGcpGcr2 = z.lazy(() => {
  return z.object({
    serviceKey: z.string(),
  });
});

/**
 *
 * @typedef  {RegistryAuthenticationGcpGcr2} registryAuthenticationGcpGcr2
 * @property {string}
 */
export type RegistryAuthenticationGcpGcr2 = z.infer<typeof registryAuthenticationGcpGcr2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const registryAuthenticationGcpGcr2Response = z.lazy(() => {
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
export const registryAuthenticationGcpGcr2Request = z.lazy(() => {
  return z.object({ serviceKey: z.string().nullish() }).transform((data) => ({
    service_key: data['serviceKey'],
  }));
});
