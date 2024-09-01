import { z } from 'zod';
import { gpuClass, gpuClassRequest, gpuClassResponse } from './gpu-class';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gpuClassesList = z.lazy(() => {
  return z.object({
    items: z.array(gpuClass).max(100),
  });
});

/**
 * Represents a list of GPU classes
 * @typedef  {GpuClassesList} gpuClassesList - Represents a list of GPU classes - Represents a list of GPU classes
 * @property {GpuClass[]} - The list of GPU classes
 */
export type GpuClassesList = z.infer<typeof gpuClassesList>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gpuClassesListResponse = z.lazy(() => {
  return z
    .object({
      items: z.array(gpuClassResponse).max(100),
    })
    .transform((data) => ({
      items: data['items'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gpuClassesListRequest = z.lazy(() => {
  return z.object({ items: z.array(gpuClassRequest).nullish() }).transform((data) => ({
    items: data['items'],
  }));
});
