import { z } from 'zod';
import { gpuClassPrice, gpuClassPriceRequest, gpuClassPriceResponse } from './gpu-class-price';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gpuClass = z.lazy(() => {
  return z.object({
    id: z.string(),
    name: z.string().min(2).max(63),
    prices: z.array(gpuClassPrice).min(1).max(100),
    isHighDemand: z.boolean().optional(),
  });
});

/**
 * Represents a GPU Class
 * @typedef  {GpuClass} gpuClass - Represents a GPU Class - Represents a GPU Class
 * @property {string} - The unique identifier
 * @property {string} - The GPU class name
 * @property {GpuClassPrice[]} - The list of prices for each container group priority
 * @property {boolean} - Whether the GPU class is in high demand
 */
export type GpuClass = z.infer<typeof gpuClass>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gpuClassResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string().min(2).max(63),
      prices: z.array(gpuClassPriceResponse).min(1).max(100),
      is_high_demand: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      prices: data['prices'],
      isHighDemand: data['is_high_demand'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gpuClassRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      name: z.string().nullish(),
      prices: z.array(gpuClassPriceRequest).nullish(),
      isHighDemand: z.boolean().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      prices: data['prices'],
      is_high_demand: data['isHighDemand'],
    }));
});
