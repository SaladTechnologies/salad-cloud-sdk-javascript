import { z } from 'zod';

/**
 * Zod schema for the CpuAvailability model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the CpuAvailability application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the CpuAvailability application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
