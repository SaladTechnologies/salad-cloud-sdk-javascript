import { z } from 'zod';
import { GpuClassPrice, gpuClassPrice, gpuClassPriceRequest, gpuClassPriceResponse } from './gpu-class-price';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gpuClass = z.lazy(() => {
  return z.object({
    id: z.string(),
    name: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ -~]{2,63}$/),
    prices: z.array(gpuClassPrice).min(1).max(100),
    isHighDemand: z.boolean().optional(),
    gpuClassType: z.string().optional(),
    gpuCount: z.number().gte(1).lte(512).optional(),
    minVcpu: z.number().gte(0).optional(),
    maxVcpu: z.number().gte(0).optional(),
    minRam: z.number().gte(0).optional(),
    maxRam: z.number().gte(0).optional(),
    minStorage: z.number().gte(0).optional(),
    maxStorage: z.number().gte(0).optional(),
  });
});

/**
 * Represents a GPU Class
 * @typedef  {GpuClass} gpuClass - Represents a GPU Class - Represents a GPU Class
 * @property {string} - The unique identifier
 * @property {string} - The GPU class name
 * @property {GpuClassPrice[]} - The list of prices for each container group priority
 * @property {boolean} - Whether the GPU class is in high demand
 * @property {GpuClassType} - The type of GPU class
 * @property {number} - The number of GPUs in the cluster
 * @property {number} - The minimum vCPU count
 * @property {number} - The maximum vCPU count
 * @property {number} - The minimum RAM amount in MB
 * @property {number} - The maximum RAM amount in MB
 * @property {number} - The minimum storage amount in bytes
 * @property {number} - The maximum storage amount in bytes
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
      name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ -~]{2,63}$/),
      prices: z.array(gpuClassPriceResponse).min(1).max(100),
      is_high_demand: z.boolean().optional(),
      gpu_class_type: z.string().optional(),
      gpu_count: z.number().gte(1).lte(512).optional(),
      min_vcpu: z.number().gte(0).optional(),
      max_vcpu: z.number().gte(0).optional(),
      min_ram: z.number().gte(0).optional(),
      max_ram: z.number().gte(0).optional(),
      min_storage: z.number().gte(0).optional(),
      max_storage: z.number().gte(0).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      prices: data['prices'],
      isHighDemand: data['is_high_demand'],
      gpuClassType: data['gpu_class_type'],
      gpuCount: data['gpu_count'],
      minVcpu: data['min_vcpu'],
      maxVcpu: data['max_vcpu'],
      minRam: data['min_ram'],
      maxRam: data['max_ram'],
      minStorage: data['min_storage'],
      maxStorage: data['max_storage'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gpuClassRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ -~]{2,63}$/),
      prices: z.array(gpuClassPriceRequest).min(1).max(100),
      isHighDemand: z.boolean().optional(),
      gpuClassType: z.string().optional(),
      gpuCount: z.number().gte(1).lte(512).optional(),
      minVcpu: z.number().gte(0).optional(),
      maxVcpu: z.number().gte(0).optional(),
      minRam: z.number().gte(0).optional(),
      maxRam: z.number().gte(0).optional(),
      minStorage: z.number().gte(0).optional(),
      maxStorage: z.number().gte(0).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      prices: data['prices'],
      is_high_demand: data['isHighDemand'],
      gpu_class_type: data['gpuClassType'],
      gpu_count: data['gpuCount'],
      min_vcpu: data['minVcpu'],
      max_vcpu: data['maxVcpu'],
      min_ram: data['minRam'],
      max_ram: data['maxRam'],
      min_storage: data['minStorage'],
      max_storage: data['maxStorage'],
    }));
});
