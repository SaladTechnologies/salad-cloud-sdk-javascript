import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerResourceUpdateSchema = z.lazy(() => {
  return z.object({
    cpu: z.number().gte(1).lte(16).optional().nullable(),
    memory: z.number().gte(1024).lte(61440).optional().nullable(),
    gpuClasses: z.array(z.string()).max(100).optional().nullable(),
    storageAmount: z.number().gte(1073741824).lte(268435456000).optional().nullable(),
    shmSize: z.number().gte(64).lte(2147483647).optional().nullable(),
  });
});

/**
 * Defines the resource specifications that can be modified for a container group, including CPU, memory, GPU classes, and storage allocations.
 * @typedef  {ContainerResourceUpdateSchema} containerResourceUpdateSchema - Defines the resource specifications that can be modified for a container group, including CPU, memory, GPU classes, and storage allocations. - Defines the resource specifications that can be modified for a container group, including CPU, memory, GPU classes, and storage allocations.
 * @property {number} - The number of CPU cores to allocate to the container (between 1 and 16 cores).
 * @property {number} - The amount of memory to allocate to the container in megabytes (between 1024MB and 61440MB).
 * @property {string[]} - List of GPU class identifiers that the container can use, specified as UUIDs.
 * @property {number} - The amount of storage to allocate to the container in bytes (between 1GB and 250GB).
 * @property {number} - The size of the shared memory (/dev/shm) in MB. If not specified, defaults to 64MB.
 */
export type ContainerResourceUpdateSchema = z.infer<typeof containerResourceUpdateSchema>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerResourceUpdateSchemaResponse = z.lazy(() => {
  return z
    .object({
      cpu: z.number().gte(1).lte(16).optional().nullable(),
      memory: z.number().gte(1024).lte(61440).optional().nullable(),
      gpu_classes: z.array(z.string()).max(100).optional().nullable(),
      storage_amount: z.number().gte(1073741824).lte(268435456000).optional().nullable(),
      shm_size: z.number().gte(64).lte(2147483647).optional().nullable(),
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
export const containerResourceUpdateSchemaRequest = z.lazy(() => {
  return z
    .object({
      cpu: z.number().gte(1).lte(16).optional().nullable(),
      memory: z.number().gte(1024).lte(61440).optional().nullable(),
      gpuClasses: z.array(z.string()).max(100).optional().nullable(),
      storageAmount: z.number().gte(1073741824).lte(268435456000).optional().nullable(),
      shmSize: z.number().gte(64).lte(2147483647).optional().nullable(),
    })
    .transform((data) => ({
      cpu: data['cpu'],
      memory: data['memory'],
      gpu_classes: data['gpuClasses'],
      storage_amount: data['storageAmount'],
      shm_size: data['shmSize'],
    }));
});
