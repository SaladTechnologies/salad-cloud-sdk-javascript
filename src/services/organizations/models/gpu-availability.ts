import { z } from 'zod';

/**
 * Zod schema for the GpuAvailability model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const gpuAvailability = z.lazy(() => {
  return z.object({
    availableGpuBatch: z.number().optional(),
    availableGpuHigh: z.number().optional(),
    availableGpuLow: z.number().optional(),
    availableGpuMedium: z.number().optional(),
    onCallGpu: z.number().optional(),
  });
});

/**
 *
 * @typedef  {GpuAvailability} gpuAvailability
 * @property {number} - The number of available GPU batches
 * @property {number} - The number of available high-end GPUs
 * @property {number} - The number of available low-end GPUs
 * @property {number} - The number of available medium-end GPUs
 * @property {number} - The number of on-call GPUs available
 */
export type GpuAvailability = z.infer<typeof gpuAvailability>;

/**
 * Zod schema for mapping API responses to the GpuAvailability application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const gpuAvailabilityResponse = z.lazy(() => {
  return z
    .object({
      available_gpu_batch: z.number().optional(),
      available_gpu_high: z.number().optional(),
      available_gpu_low: z.number().optional(),
      available_gpu_medium: z.number().optional(),
      on_call_gpu: z.number().optional(),
    })
    .transform((data) => ({
      availableGpuBatch: data['available_gpu_batch'],
      availableGpuHigh: data['available_gpu_high'],
      availableGpuLow: data['available_gpu_low'],
      availableGpuMedium: data['available_gpu_medium'],
      onCallGpu: data['on_call_gpu'],
    }));
});

/**
 * Zod schema for mapping the GpuAvailability application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const gpuAvailabilityRequest = z.lazy(() => {
  return z
    .object({
      availableGpuBatch: z.number().optional(),
      availableGpuHigh: z.number().optional(),
      availableGpuLow: z.number().optional(),
      availableGpuMedium: z.number().optional(),
      onCallGpu: z.number().optional(),
    })
    .transform((data) => ({
      available_gpu_batch: data['availableGpuBatch'],
      available_gpu_high: data['availableGpuHigh'],
      available_gpu_low: data['availableGpuLow'],
      available_gpu_medium: data['availableGpuMedium'],
      on_call_gpu: data['onCallGpu'],
    }));
});
