import { z } from 'zod';

/**
 * Zod schema for the GpuAvailabilityPrototype model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const gpuAvailabilityPrototype = z.lazy(() => {
  return z.object({
    countryCodes: z.array(z.string()).optional(),
    cpu: z.number().optional().nullable(),
    gpuClasses: z.array(z.string()).min(1),
    memory: z.number().optional().nullable(),
    storageAmount: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {GpuAvailabilityPrototype} gpuAvailabilityPrototype
 * @property {CountryCode[]} - A list of country codes where the resources are available
 * @property {number} - The number of available CPU cores
 * @property {string[]} - A list of available GPU class names
 * @property {number} - The amount of available memory in MB
 * @property {number} - The amount of available storage in bytes
 */
export type GpuAvailabilityPrototype = z.infer<typeof gpuAvailabilityPrototype>;

/**
 * Zod schema for mapping API responses to the GpuAvailabilityPrototype application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const gpuAvailabilityPrototypeResponse = z.lazy(() => {
  return z
    .object({
      country_codes: z.array(z.string()).optional(),
      cpu: z.number().optional().nullable(),
      gpu_classes: z.array(z.string()).min(1),
      memory: z.number().optional().nullable(),
      storage_amount: z.number().optional().nullable(),
    })
    .transform((data) => ({
      countryCodes: data['country_codes'],
      cpu: data['cpu'],
      gpuClasses: data['gpu_classes'],
      memory: data['memory'],
      storageAmount: data['storage_amount'],
    }));
});

/**
 * Zod schema for mapping the GpuAvailabilityPrototype application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const gpuAvailabilityPrototypeRequest = z.lazy(() => {
  return z
    .object({
      countryCodes: z.array(z.string()).optional(),
      cpu: z.number().optional().nullable(),
      gpuClasses: z.array(z.string()).min(1),
      memory: z.number().optional().nullable(),
      storageAmount: z.number().optional().nullable(),
    })
    .transform((data) => ({
      country_codes: data['countryCodes'],
      cpu: data['cpu'],
      gpu_classes: data['gpuClasses'],
      memory: data['memory'],
      storage_amount: data['storageAmount'],
    }));
});
