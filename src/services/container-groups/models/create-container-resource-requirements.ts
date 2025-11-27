import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createContainerResourceRequirements = z.lazy(() => {
  return z.object({
    cpu: z.number().gte(1).lte(1024),
    memory: z.number().gte(1024).lte(1073741824),
    gpuClasses: z.array(z.string()).max(100).optional(),
    storageAmount: z.number().gte(1073741824).lte(1125899906842624).optional(),
    shmSize: z.number().gte(64).lte(1073741824).optional(),
  });
});

/**
 * Specifies the resource requirements for creating a container.
 * @typedef  {CreateContainerResourceRequirements} createContainerResourceRequirements - Specifies the resource requirements for creating a container. - Specifies the resource requirements for creating a container.
 * @property {number} - The number of CPU cores to allocate to the container (between 1 and 1024).
 * @property {number} - The amount of memory to allocate to the container in megabytes (between 1024 and 1073741824).
 * @property {string[]} - A list of GPU class UUIDs required by the container. Can be null if no GPU is required.
 * @property {number} - The amount of storage to allocate to the container in bytes (between 1 GB and 1 PB).
 * @property {number} - The amount of shared memory to allocate to the container via `/dev/shm` in megabytes (between 64 and 1073741824). If not specified, defaults to 64 MB.
 */
export type CreateContainerResourceRequirements = z.infer<typeof createContainerResourceRequirements>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createContainerResourceRequirementsResponse = z.lazy(() => {
  return z
    .object({
      cpu: z.number().gte(1).lte(1024),
      memory: z.number().gte(1024).lte(1073741824),
      gpu_classes: z.array(z.string()).max(100).optional(),
      storage_amount: z.number().gte(1073741824).lte(1125899906842624).optional(),
      shm_size: z.number().gte(64).lte(1073741824).optional(),
    })
    .transform((data) => ({
      cpu: data['cpu'],
      memory: data['memory'],
      gpuClasses: data['gpu_classes'],
      storageAmount: data['storage_amount'],
      shmSize: data['shm_size'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createContainerResourceRequirementsRequest = z.lazy(() => {
  return z
    .object({
      cpu: z.number().gte(1).lte(1024),
      memory: z.number().gte(1024).lte(1073741824),
      gpuClasses: z.array(z.string()).max(100).optional(),
      storageAmount: z.number().gte(1073741824).lte(1125899906842624).optional(),
      shmSize: z.number().gte(64).lte(1073741824).optional(),
    })
    .transform((data) => ({
      cpu: data['cpu'],
      memory: data['memory'],
      gpu_classes: data['gpuClasses'],
      storage_amount: data['storageAmount'],
      shm_size: data['shmSize'],
    }));
});
