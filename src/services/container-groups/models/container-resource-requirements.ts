import { z } from 'zod';

/**
 * Zod schema for the ContainerResourceRequirements model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerResourceRequirements = z.lazy(() => {
  return z.object({
    cpu: z.number().gte(1).lte(1024),
    gpuClasses: z.array(z.string()).max(100),
    memory: z.number().gte(1024).lte(1073741824),
    shmSize: z.number().gte(64).lte(1073741824).optional(),
    storageAmount: z.number().gte(1073741824).lte(1125899906842624).optional(),
  });
});

/**
 * Specifies the resource requirements for a container.
 * @typedef  {ContainerResourceRequirements} containerResourceRequirements - Specifies the resource requirements for a container. - Specifies the resource requirements for a container.
 * @property {number} - The number of CPU cores required by the container. Must be between 1 and 16.
 * @property {string[]} - A list of GPU class UUIDs required by the container. Can be null if no GPU is required.
 * @property {number} - The amount of memory (in MB) required by the container. Must be between 1024 MB and 61440 MB.
 * @property {number} - The size of the shared memory (/dev/shm) in MB. If not specified, defaults to 1024MB.
 * @property {number} - The amount of storage (in bytes) required by the container. Must be between 1 GB (1073741824 bytes) and 250 GB (268435456000 bytes).
 */
export type ContainerResourceRequirements = z.infer<typeof containerResourceRequirements>;

/**
 * Zod schema for mapping API responses to the ContainerResourceRequirements application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerResourceRequirementsResponse = z.lazy(() => {
  return z
    .object({
      cpu: z.number().gte(1).lte(1024),
      gpu_classes: z.array(z.string()).max(100),
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
 * Zod schema for mapping the ContainerResourceRequirements application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerResourceRequirementsRequest = z.lazy(() => {
  return z
    .object({
      cpu: z.number().gte(1).lte(1024),
      gpuClasses: z.array(z.string()).max(100),
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
