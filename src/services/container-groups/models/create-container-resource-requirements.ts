import { z } from 'zod';

/**
 * Zod schema for the CreateContainerResourceRequirements model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createContainerResourceRequirements = z.lazy(() => {
  return z.object({
    cpu: z.number().gte(1).lte(1024),
    gpuClasses: z.array(z.string()).max(100).optional(),
    memory: z.number().gte(1024).lte(1073741824),
    shmSize: z.number().gte(64).lte(1073741824).optional(),
    storageAmount: z.number().gte(1073741824).lte(1125899906842624).optional(),
  });
});

/**
 * Specifies the resource requirements for creating a container.
 * @typedef  {CreateContainerResourceRequirements} createContainerResourceRequirements - Specifies the resource requirements for creating a container. - Specifies the resource requirements for creating a container.
 * @property {number} - The number of CPU cores to allocate to the container (between 1 and 1024).
 * @property {string[]} - A list of GPU class UUIDs required by the container. Can be null if no GPU is required.
 * @property {number} - The amount of memory to allocate to the container in megabytes (between 1024 and 1073741824).
 * @property {number} - The amount of shared memory to allocate to the container via `/dev/shm` in megabytes (between 64 and 1073741824). If not specified, defaults to 64 MB.
 * @property {number} - The amount of storage to allocate to the container in bytes (between 1 GB and 1 PB).
 */
export type CreateContainerResourceRequirements = z.infer<typeof createContainerResourceRequirements>;

/**
 * Zod schema for mapping API responses to the CreateContainerResourceRequirements application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createContainerResourceRequirementsResponse = z.lazy(() => {
  return z
    .object({
      cpu: z.number().gte(1).lte(1024),
      gpu_classes: z.array(z.string()).max(100).optional(),
      memory: z.number().gte(1024).lte(1073741824),
      shm_size: z.number().gte(64).lte(1073741824).optional(),
      storage_amount: z.number().gte(1073741824).lte(1125899906842624).optional(),
    })
    .transform((data) => ({
      cpu: data['cpu'],
      gpuClasses: data['gpu_classes'],
      memory: data['memory'],
      shmSize: data['shm_size'],
      storageAmount: data['storage_amount'],
    }));
});

/**
 * Zod schema for mapping the CreateContainerResourceRequirements application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createContainerResourceRequirementsRequest = z.lazy(() => {
  return z
    .object({
      cpu: z.number().gte(1).lte(1024),
      gpuClasses: z.array(z.string()).max(100).optional(),
      memory: z.number().gte(1024).lte(1073741824),
      shmSize: z.number().gte(64).lte(1073741824).optional(),
      storageAmount: z.number().gte(1073741824).lte(1125899906842624).optional(),
    })
    .transform((data) => ({
      cpu: data['cpu'],
      gpu_classes: data['gpuClasses'],
      memory: data['memory'],
      shm_size: data['shmSize'],
      storage_amount: data['storageAmount'],
    }));
});
