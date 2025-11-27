import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const cpuAvailability = z.lazy(() => {
  return z.object({
    availableCpuBatch: z.number().optional(),
    onCallCpu: z.number().optional(),
  });
});

/**
 *
 * @typedef  {CpuAvailability} cpuAvailability
 * @property {number} - The number of available CPU cores
 * @property {number} - The amount of on-call CPU
 */
export type CpuAvailability = z.infer<typeof cpuAvailability>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const cpuAvailabilityResponse = z.lazy(() => {
  return z
    .object({
      available_cpu_batch: z.number().optional(),
      on_call_cpu: z.number().optional(),
    })
    .transform((data) => ({
      availableCpuBatch: data['available_cpu_batch'],
      onCallCpu: data['on_call_cpu'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const cpuAvailabilityRequest = z.lazy(() => {
  return z
    .object({
      availableCpuBatch: z.number().optional(),
      onCallCpu: z.number().optional(),
    })
    .transform((data) => ({
      available_cpu_batch: data['availableCpuBatch'],
      on_call_cpu: data['onCallCpu'],
    }));
});
