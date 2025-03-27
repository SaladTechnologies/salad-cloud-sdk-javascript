import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gpuClassPrice = z.lazy(() => {
  return z.object({
    priority: z.string().nullable(),
    price: z.string().min(1).max(20).regex(/^.*$/),
  });
});

/**
 * Represents the price of a GPU class for a given container group priority
 * @typedef  {GpuClassPrice} gpuClassPrice - Represents the price of a GPU class for a given container group priority - Represents the price of a GPU class for a given container group priority
 * @property {ContainerGroupPriority} - Specifies the priority level for container group execution, which determines resource allocation and scheduling precedence.
 * @property {string} - The price
 */
export type GpuClassPrice = z.infer<typeof gpuClassPrice>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gpuClassPriceResponse = z.lazy(() => {
  return z
    .object({
      priority: z.string().nullable(),
      price: z.string().min(1).max(20).regex(/^.*$/),
    })
    .transform((data) => ({
      priority: data['priority'],
      price: data['price'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gpuClassPriceRequest = z.lazy(() => {
  return z
    .object({
      priority: z.string().nullable(),
      price: z.string().min(1).max(20).regex(/^.*$/),
    })
    .transform((data) => ({
      priority: data['priority'],
      price: data['price'],
    }));
});
