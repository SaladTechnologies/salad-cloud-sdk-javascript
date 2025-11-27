import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gpuAvailability = z.lazy(() => {
  return z.object({
    availableGpuBatch: z.number().optional(),
    availableGpuLow: z.number().optional(),
    availableGpuMedium: z.number().optional(),
    availableGpuHigh: z.number().optional(),
    onCallGpu: z.number().optional(),
  });
});

/**
 *
 * @typedef  {GpuAvailability} gpuAvailability
 * @property {number} - The number of available GPU batches
 * @property {number} - The number of available low-end GPUs
 * @property {number} - The number of available medium-end GPUs
 * @property {number} - The number of available high-end GPUs
 * @property {number} - The number of on-call GPUs available
 */
export type GpuAvailability = z.infer<typeof gpuAvailability>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gpuAvailabilityResponse = z.lazy(() => {
  return z
    .object({
      available_gpu_batch: z.number().optional(),
      available_gpu_low: z.number().optional(),
      available_gpu_medium: z.number().optional(),
      available_gpu_high: z.number().optional(),
      on_call_gpu: z.number().optional(),
    })
    .transform((data) => ({
      availableGpuBatch: data['available_gpu_batch'],
      availableGpuLow: data['available_gpu_low'],
      availableGpuMedium: data['available_gpu_medium'],
      availableGpuHigh: data['available_gpu_high'],
      onCallGpu: data['on_call_gpu'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gpuAvailabilityRequest = z.lazy(() => {
  return z
    .object({
      availableGpuBatch: z.number().optional(),
      availableGpuLow: z.number().optional(),
      availableGpuMedium: z.number().optional(),
      availableGpuHigh: z.number().optional(),
      onCallGpu: z.number().optional(),
    })
    .transform((data) => ({
      available_gpu_batch: data['availableGpuBatch'],
      available_gpu_low: data['availableGpuLow'],
      available_gpu_medium: data['availableGpuMedium'],
      available_gpu_high: data['availableGpuHigh'],
      on_call_gpu: data['onCallGpu'],
    }));
});
