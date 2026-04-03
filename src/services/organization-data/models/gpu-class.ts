import { z } from 'zod';
import { GpuClassPrice, gpuClassPrice, gpuClassPriceRequest, gpuClassPriceResponse } from './gpu-class-price';

/**
 * Zod schema for the GpuClass model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const gpuClass = z.lazy(() => {
  return z.object({
    gpuClassType: z.string().optional(),
    gpuCount: z.number().gte(1).lte(512).optional(),
    id: z.string(),
    isHighDemand: z.boolean().optional(),
    maxRam: z.number().gte(0).optional(),
    maxStorage: z.number().gte(0).optional(),
    maxVcpu: z.number().gte(0).optional(),
    minRam: z.number().gte(0).optional(),
    minStorage: z.number().gte(0).optional(),
    minVcpu: z.number().gte(0).optional(),
    name: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ -~]{2,63}$/),
    prices: z.array(gpuClassPrice).min(1).max(100),
  });
});

/**
 * Represents a GPU Class
 * @typedef  {GpuClass} gpuClass - Represents a GPU Class - Represents a GPU Class
 * @property {GpuClassType} - The type of GPU class
 * @property {number} - The number of GPUs in the cluster
 * @property {string} - The unique identifier
 * @property {boolean} - Whether the GPU class is in high demand
 * @property {number} - The maximum RAM amount in MB
 * @property {number} - The maximum storage amount in bytes
 * @property {number} - The maximum vCPU count
 * @property {number} - The minimum RAM amount in MB
 * @property {number} - The minimum storage amount in bytes
 * @property {number} - The minimum vCPU count
 * @property {string} - The GPU class name
 * @property {GpuClassPrice[]} - The list of prices for each container group priority
 */
export type GpuClass = z.infer<typeof gpuClass>;

/**
 * Zod schema for mapping API responses to the GpuClass application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const gpuClassResponse = z.lazy(() => {
  return z
    .object({
      gpu_class_type: z.string().optional(),
      gpu_count: z.number().gte(1).lte(512).optional(),
      id: z.string(),
      is_high_demand: z.boolean().optional(),
      max_ram: z.number().gte(0).optional(),
      max_storage: z.number().gte(0).optional(),
      max_vcpu: z.number().gte(0).optional(),
      min_ram: z.number().gte(0).optional(),
      min_storage: z.number().gte(0).optional(),
      min_vcpu: z.number().gte(0).optional(),
      name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ -~]{2,63}$/),
      prices: z.array(gpuClassPriceResponse).min(1).max(100),
    })
    .transform((data) => ({
      gpuClassType: data['gpu_class_type'],
      gpuCount: data['gpu_count'],
      id: data['id'],
      isHighDemand: data['is_high_demand'],
      maxRam: data['max_ram'],
      maxStorage: data['max_storage'],
      maxVcpu: data['max_vcpu'],
      minRam: data['min_ram'],
      minStorage: data['min_storage'],
      minVcpu: data['min_vcpu'],
      name: data['name'],
      prices: data['prices'],
    }));
});

/**
 * Zod schema for mapping the GpuClass application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const gpuClassRequest = z.lazy(() => {
  return z
    .object({
      gpuClassType: z.string().optional(),
      gpuCount: z.number().gte(1).lte(512).optional(),
      id: z.string(),
      isHighDemand: z.boolean().optional(),
      maxRam: z.number().gte(0).optional(),
      maxStorage: z.number().gte(0).optional(),
      maxVcpu: z.number().gte(0).optional(),
      minRam: z.number().gte(0).optional(),
      minStorage: z.number().gte(0).optional(),
      minVcpu: z.number().gte(0).optional(),
      name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ -~]{2,63}$/),
      prices: z.array(gpuClassPriceRequest).min(1).max(100),
    })
    .transform((data) => ({
      gpu_class_type: data['gpuClassType'],
      gpu_count: data['gpuCount'],
      id: data['id'],
      is_high_demand: data['isHighDemand'],
      max_ram: data['maxRam'],
      max_storage: data['maxStorage'],
      max_vcpu: data['maxVcpu'],
      min_ram: data['minRam'],
      min_storage: data['minStorage'],
      min_vcpu: data['minVcpu'],
      name: data['name'],
      prices: data['prices'],
    }));
});
