import { z } from 'zod';

/**
 * Zod schema for the ContainerResourceUpdateSchema model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerResourceUpdateSchema = z.lazy(() => {
  return z.object({
    cpu: z.number().gte(1).lte(1024).optional().nullable(),
    gpuClasses: z.array(z.string()).max(100).optional().nullable(),
    memory: z.number().gte(1024).lte(1073741824).optional().nullable(),
    shmSize: z.number().gte(64).lte(1073741824).optional().nullable(),
    storageAmount: z.number().gte(1073741824).lte(1125899906842624).optional().nullable(),
  });
});

/**
 * Defines the resource specifications that can be modified for a container group, including CPU, memory, GPU classes, and storage allocations.
 * @typedef  {ContainerResourceUpdateSchema} containerResourceUpdateSchema - Defines the resource specifications that can be modified for a container group, including CPU, memory, GPU classes, and storage allocations. - Defines the resource specifications that can be modified for a container group, including CPU, memory, GPU classes, and storage allocations.
 * @property {number} - The number of CPU cores to allocate to the container (between 1 and 1024).
 * @property {string[]} - List of GPU class identifiers that the container can use, specified as UUIDs.
 * @property {number} - The amount of memory to allocate to the container in megabytes (between 1024 and 1073741824).
 * @property {number} - The amount of shared memory to allocate to the container via `/dev/shm` in megabytes (between 64 and 1073741824). If not specified, defaults to 64 MB.
 * @property {number} - The amount of storage to allocate to the container in bytes (between 1 GB and 1 PB).
 */
export type ContainerResourceUpdateSchema = z.infer<typeof containerResourceUpdateSchema>;

/**
 * Zod schema for mapping API responses to the ContainerResourceUpdateSchema application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerResourceUpdateSchemaResponse = z.lazy(() => {
  return z
    .object({
      cpu: z.number().gte(1).lte(1024).optional().nullable(),
      gpu_classes: z.array(z.string()).max(100).optional().nullable(),
      memory: z.number().gte(1024).lte(1073741824).optional().nullable(),
      shm_size: z.number().gte(64).lte(1073741824).optional().nullable(),
      storage_amount: z.number().gte(1073741824).lte(1125899906842624).optional().nullable(),
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
 * Zod schema for mapping the ContainerResourceUpdateSchema application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerResourceUpdateSchemaRequest = z.lazy(() => {
  return z
    .object({
      cpu: z.number().gte(1).lte(1024).optional().nullable(),
      gpuClasses: z.array(z.string()).max(100).optional().nullable(),
      memory: z.number().gte(1024).lte(1073741824).optional().nullable(),
      shmSize: z.number().gte(64).lte(1073741824).optional().nullable(),
      storageAmount: z.number().gte(1073741824).lte(1125899906842624).optional().nullable(),
    })
    .transform((data) => ({
      cpu: data['cpu'],
      gpu_classes: data['gpuClasses'],
      memory: data['memory'],
      shm_size: data['shmSize'],
      storage_amount: data['storageAmount'],
    }));
});
