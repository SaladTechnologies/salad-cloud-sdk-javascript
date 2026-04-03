import { z } from 'zod';
import { GpuClass, gpuClass, gpuClassRequest, gpuClassResponse } from './gpu-class';

/**
 * Zod schema for the GpuClassesList model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the GpuClassesList application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the GpuClassesList application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const gpuClassesListRequest = z.lazy(() => {
  return z
    .object({
      items: z.array(gpuClassRequest).max(100),
    })
    .transform((data) => ({
      items: data['items'],
    }));
});
