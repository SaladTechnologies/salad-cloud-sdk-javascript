import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gpuAvailabilityPrototype = z.lazy(() => {
  return z.object({
    gpuClasses: z.array(z.string()).min(1),
    cpu: z.number().optional().nullable(),
    memory: z.number().optional().nullable(),
    storageAmount: z.number().optional().nullable(),
    countryCodes: z.array(z.string()).optional(),
  });
});

/**
 *
 * @typedef  {GpuAvailabilityPrototype} gpuAvailabilityPrototype
 * @property {string[]} - A list of available GPU class names
 * @property {number} - The number of available CPU cores
 * @property {number} - The amount of available memory in MB
 * @property {number} - The amount of available storage in bytes
 * @property {CountryCode[]} - A list of country codes where the resources are available
 */
export type GpuAvailabilityPrototype = z.infer<typeof gpuAvailabilityPrototype>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gpuAvailabilityPrototypeResponse = z.lazy(() => {
  return z
    .object({
      gpu_classes: z.array(z.string()).min(1),
      cpu: z.number().optional().nullable(),
      memory: z.number().optional().nullable(),
      storage_amount: z.number().optional().nullable(),
      country_codes: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      gpuClasses: data['gpu_classes'],
      cpu: data['cpu'],
      memory: data['memory'],
      storageAmount: data['storage_amount'],
      countryCodes: data['country_codes'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gpuAvailabilityPrototypeRequest = z.lazy(() => {
  return z
    .object({
      gpuClasses: z.array(z.string()).min(1),
      cpu: z.number().optional().nullable(),
      memory: z.number().optional().nullable(),
      storageAmount: z.number().optional().nullable(),
      countryCodes: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      gpu_classes: data['gpuClasses'],
      cpu: data['cpu'],
      memory: data['memory'],
      storage_amount: data['storageAmount'],
      country_codes: data['countryCodes'],
    }));
});
