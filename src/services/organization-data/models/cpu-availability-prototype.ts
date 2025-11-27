import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const cpuAvailabilityPrototype = z.lazy(() => {
  return z.object({
    cpu: z.number().optional().nullable(),
    memory: z.number().optional().nullable(),
    storageAmount: z.number().optional().nullable(),
    countryCodes: z.array(z.string()).optional(),
  });
});

/**
 *
 * @typedef  {CpuAvailabilityPrototype} cpuAvailabilityPrototype
 * @property {number} - The number of available CPU cores
 * @property {number} - The amount of available memory in MB
 * @property {number} - The amount of available storage in bytes
 * @property {CountryCode[]} - A list of country codes where the resources are available
 */
export type CpuAvailabilityPrototype = z.infer<typeof cpuAvailabilityPrototype>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const cpuAvailabilityPrototypeResponse = z.lazy(() => {
  return z
    .object({
      cpu: z.number().optional().nullable(),
      memory: z.number().optional().nullable(),
      storage_amount: z.number().optional().nullable(),
      country_codes: z.array(z.string()).optional(),
    })
    .transform((data) => ({
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
export const cpuAvailabilityPrototypeRequest = z.lazy(() => {
  return z
    .object({
      cpu: z.number().optional().nullable(),
      memory: z.number().optional().nullable(),
      storageAmount: z.number().optional().nullable(),
      countryCodes: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      cpu: data['cpu'],
      memory: data['memory'],
      storage_amount: data['storageAmount'],
      country_codes: data['countryCodes'],
    }));
});
