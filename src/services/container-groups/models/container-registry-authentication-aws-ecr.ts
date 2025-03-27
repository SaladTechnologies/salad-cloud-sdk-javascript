import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerRegistryAuthenticationAwsEcr = z.lazy(() => {
  return z.object({
    accessKeyId: z.string().min(1).max(10000).regex(/^.*$/),
    secretAccessKey: z.string().min(1).max(10000).regex(/^.*$/),
  });
});

/**
 * Authentication details for AWS Elastic Container Registry (ECR)
 * @typedef  {ContainerRegistryAuthenticationAwsEcr} containerRegistryAuthenticationAwsEcr - Authentication details for AWS Elastic Container Registry (ECR) - Authentication details for AWS Elastic Container Registry (ECR)
 * @property {string} - AWS access key ID used for ECR authentication
 * @property {string} - AWS secret access key used for ECR authentication
 */
export type ContainerRegistryAuthenticationAwsEcr = z.infer<typeof containerRegistryAuthenticationAwsEcr>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerRegistryAuthenticationAwsEcrResponse = z.lazy(() => {
  return z
    .object({
      access_key_id: z.string().min(1).max(10000).regex(/^.*$/),
      secret_access_key: z.string().min(1).max(10000).regex(/^.*$/),
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
export const containerRegistryAuthenticationAwsEcrRequest = z.lazy(() => {
  return z
    .object({
      accessKeyId: z.string().min(1).max(10000).regex(/^.*$/),
      secretAccessKey: z.string().min(1).max(10000).regex(/^.*$/),
    })
    .transform((data) => ({
      access_key_id: data['accessKeyId'],
      secret_access_key: data['secretAccessKey'],
    }));
});
