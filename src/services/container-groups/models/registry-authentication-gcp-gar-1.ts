import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const registryAuthenticationGcpGar1 = z.lazy(() => {
  return z.object({
    serviceKey: z.string(),
  });
});

/**
 *
 * @typedef  {RegistryAuthenticationGcpGar1} registryAuthenticationGcpGar1
 * @property {string}
 */
export type RegistryAuthenticationGcpGar1 = z.infer<typeof registryAuthenticationGcpGar1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const registryAuthenticationGcpGar1Response = z.lazy(() => {
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
export const registryAuthenticationGcpGar1Request = z.lazy(() => {
  return z.object({ serviceKey: z.string().nullish() }).transform((data) => ({
    service_key: data['serviceKey'],
  }));
});
