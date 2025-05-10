import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createContainerResourceRequirements = z.lazy(() => {
  return z.object({
    cpu: z.number().gte(1).lte(16),
    memory: z.number().gte(1024).lte(61440),
    gpuClasses: z.array(z.string()).max(100).optional(),
    storageAmount: z.number().gte(1073741824).lte(268435456000).optional(),
  });
});

/**
 * Specifies the resource requirements for creating a container.
 * @typedef  {CreateContainerResourceRequirements} createContainerResourceRequirements - Specifies the resource requirements for creating a container. - Specifies the resource requirements for creating a container.
 * @property {number} - The number of CPU cores required by the container. Must be between 1 and 16.
 * @property {number} - The amount of memory (in MB) required by the container. Must be between 1024 MB and 61440 MB.
 * @property {string[]} - A list of GPU class UUIDs required by the container. Can be null if no GPU is required.
 * @property {number} - The amount of storage (in bytes) required by the container. Must be between 1 GB (1073741824 bytes) and 250 GB (268435456000 bytes).
 */
export type CreateContainerResourceRequirements = z.infer<typeof createContainerResourceRequirements>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createContainerResourceRequirementsResponse = z.lazy(() => {
  return z
    .object({
      cpu: z.number().gte(1).lte(16),
      memory: z.number().gte(1024).lte(61440),
      gpu_classes: z.array(z.string()).max(100).optional(),
      storage_amount: z.number().gte(1073741824).lte(268435456000).optional(),
    })
    .transform((data) => ({
      cpu: data['cpu'],
      memory: data['memory'],
      gpuClasses: data['gpu_classes'],
      storageAmount: data['storage_amount'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createContainerResourceRequirementsRequest = z.lazy(() => {
  return z
    .object({
      cpu: z.number().gte(1).lte(16),
      memory: z.number().gte(1024).lte(61440),
      gpuClasses: z.array(z.string()).max(100).optional(),
      storageAmount: z.number().gte(1073741824).lte(268435456000).optional(),
    })
    .transform((data) => ({
      cpu: data['cpu'],
      memory: data['memory'],
      gpu_classes: data['gpuClasses'],
      storage_amount: data['storageAmount'],
    }));
});
