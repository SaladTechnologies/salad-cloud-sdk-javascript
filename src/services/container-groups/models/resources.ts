import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const resources = z.lazy(() => {
  return z.object({
    cpu: z.number().gte(1).lte(16).optional().nullable(),
    memory: z.number().gte(1024).lte(30720).optional().nullable(),
    gpuClasses: z.array(z.string()).optional().nullable(),
    storageAmount: z.number().gte(1073741824).lte(53687091200).optional().nullable(),
  });
});

/**
 *
 * @typedef  {Resources} resources
 * @property {number}
 * @property {number}
 * @property {string[]}
 * @property {number}
 */
export type Resources = z.infer<typeof resources>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const resourcesResponse = z.lazy(() => {
  return z
    .object({
      cpu: z.number().gte(1).lte(16).optional().nullable(),
      memory: z.number().gte(1024).lte(30720).optional().nullable(),
      gpu_classes: z.array(z.string()).optional().nullable(),
      storage_amount: z.number().gte(1073741824).lte(53687091200).optional().nullable(),
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
export const resourcesRequest = z.lazy(() => {
  return z
    .object({
      cpu: z.number().nullish(),
      memory: z.number().nullish(),
      gpuClasses: z.array(z.string()).nullish(),
      storageAmount: z.number().nullish(),
    })
    .transform((data) => ({
      cpu: data['cpu'],
      memory: data['memory'],
      gpu_classes: data['gpuClasses'],
      storage_amount: data['storageAmount'],
    }));
});
