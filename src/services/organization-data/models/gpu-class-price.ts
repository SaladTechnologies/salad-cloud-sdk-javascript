import { z } from 'zod';

/**
 * Zod schema for the GpuClassPrice model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const gpuClassPrice = z.lazy(() => {
  return z.object({
    price: z.string().min(1).max(20).regex(/^.*$/),
    priority: z.string().nullable(),
  });
});

/**
 * Represents the price of a GPU class for a given container group priority
 * @typedef  {GpuClassPrice} gpuClassPrice - Represents the price of a GPU class for a given container group priority - Represents the price of a GPU class for a given container group priority
 * @property {string} - The price
 * @property {ContainerGroupPriority} - Specifies the priority level for container group execution, which determines resource allocation and scheduling precedence.
 */
export type GpuClassPrice = z.infer<typeof gpuClassPrice>;

/**
 * Zod schema for mapping API responses to the GpuClassPrice application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const gpuClassPriceResponse = z.lazy(() => {
  return z
    .object({
      price: z.string().min(1).max(20).regex(/^.*$/),
      priority: z.string().nullable(),
    })
    .transform((data) => ({
      price: data['price'],
      priority: data['priority'],
    }));
});

/**
 * Zod schema for mapping the GpuClassPrice application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const gpuClassPriceRequest = z.lazy(() => {
  return z
    .object({
      price: z.string().min(1).max(20).regex(/^.*$/),
      priority: z.string().nullable(),
    })
    .transform((data) => ({
      price: data['price'],
      priority: data['priority'],
    }));
});
