import { z } from 'zod';

/**
 * Zod schema for the ContainerRegistryAuthenticationAwsEcr model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the ContainerRegistryAuthenticationAwsEcr application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the ContainerRegistryAuthenticationAwsEcr application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
