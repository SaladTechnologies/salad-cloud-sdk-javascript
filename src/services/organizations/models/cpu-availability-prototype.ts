import { z } from 'zod';

/**
 * Zod schema for the CpuAvailabilityPrototype model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const cpuAvailabilityPrototype = z.lazy(() => {
  return z.object({
    countryCodes: z.array(z.string()).optional(),
    cpu: z.number().optional().nullable(),
    memory: z.number().optional().nullable(),
    storageAmount: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {CpuAvailabilityPrototype} cpuAvailabilityPrototype
 * @property {CountryCode[]} - A list of country codes where the resources are available
 * @property {number} - The number of available CPU cores
 * @property {number} - The amount of available memory in MB
 * @property {number} - The amount of available storage in bytes
 */
export type CpuAvailabilityPrototype = z.infer<typeof cpuAvailabilityPrototype>;

/**
 * Zod schema for mapping API responses to the CpuAvailabilityPrototype application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const cpuAvailabilityPrototypeResponse = z.lazy(() => {
  return z
    .object({
      country_codes: z.array(z.string()).optional(),
      cpu: z.number().optional().nullable(),
      memory: z.number().optional().nullable(),
      storage_amount: z.number().optional().nullable(),
    })
    .transform((data) => ({
      countryCodes: data['country_codes'],
      cpu: data['cpu'],
      memory: data['memory'],
      storageAmount: data['storage_amount'],
    }));
});

/**
 * Zod schema for mapping the CpuAvailabilityPrototype application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const cpuAvailabilityPrototypeRequest = z.lazy(() => {
  return z
    .object({
      countryCodes: z.array(z.string()).optional(),
      cpu: z.number().optional().nullable(),
      memory: z.number().optional().nullable(),
      storageAmount: z.number().optional().nullable(),
    })
    .transform((data) => ({
      country_codes: data['countryCodes'],
      cpu: data['cpu'],
      memory: data['memory'],
      storage_amount: data['storageAmount'],
    }));
});
