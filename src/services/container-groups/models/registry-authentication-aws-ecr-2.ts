import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const registryAuthenticationAwsEcr2 = z.lazy(() => {
  return z.object({
    accessKeyId: z.string(),
    secretAccessKey: z.string(),
  });
});

/**
 *
 * @typedef  {RegistryAuthenticationAwsEcr2} registryAuthenticationAwsEcr2
 * @property {string}
 * @property {string}
 */
export type RegistryAuthenticationAwsEcr2 = z.infer<typeof registryAuthenticationAwsEcr2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const registryAuthenticationAwsEcr2Response = z.lazy(() => {
  return z
    .object({
      access_key_id: z.string(),
      secret_access_key: z.string(),
    })
    .transform((data) => ({
      accessKeyId: data['access_key_id'],
      secretAccessKey: data['secret_access_key'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const registryAuthenticationAwsEcr2Request = z.lazy(() => {
  return z.object({ accessKeyId: z.string().nullish(), secretAccessKey: z.string().nullish() }).transform((data) => ({
    access_key_id: data['accessKeyId'],
    secret_access_key: data['secretAccessKey'],
  }));
});
