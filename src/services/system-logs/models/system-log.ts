import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const systemLog = z.lazy(() => {
  return z.object({
    eventName: z.string().min(1).max(255).regex(/^.*$/),
    eventTime: z.string(),
    instanceId: z.string().optional(),
    machineId: z.string().optional(),
    resourceCpu: z.number().gte(1).lte(16).nullable(),
    resourceGpuClass: z.string(),
    resourceMemory: z.number().gte(1024).lte(61440).nullable(),
    resourceStorageAmount: z.number().gte(1073741824).lte(53687091200).nullable(),
    version: z.string(),
  });
});

/**
 * Represents a system log
 * @typedef  {SystemLog} systemLog - Represents a system log - Represents a system log
 * @property {string} - The name of the event
 * @property {string} - The UTC date & time when the log item was created
 * @property {string} - The container group instance identifier.
 * @property {string} - The container group machine identifier.
 * @property {number} - The number of CPUs
 * @property {string} - The GPU class name
 * @property {number} - The memory amount in MB
 * @property {number} - The storage amount in bytes
 * @property {string} - The version instance ID
 */
export type SystemLog = z.infer<typeof systemLog>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const systemLogResponse = z.lazy(() => {
  return z
    .object({
      event_name: z.string().min(1).max(255).regex(/^.*$/),
      event_time: z.string(),
      instance_id: z.string().optional(),
      machine_id: z.string().optional(),
      resource_cpu: z.number().gte(1).lte(16).nullable(),
      resource_gpu_class: z.string(),
      resource_memory: z.number().gte(1024).lte(61440).nullable(),
      resource_storage_amount: z.number().gte(1073741824).lte(53687091200).nullable(),
      version: z.string(),
    })
    .transform((data) => ({
      eventName: data['event_name'],
      eventTime: data['event_time'],
      instanceId: data['instance_id'],
      machineId: data['machine_id'],
      resourceCpu: data['resource_cpu'],
      resourceGpuClass: data['resource_gpu_class'],
      resourceMemory: data['resource_memory'],
      resourceStorageAmount: data['resource_storage_amount'],
      version: data['version'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const systemLogRequest = z.lazy(() => {
  return z
    .object({
      eventName: z.string().min(1).max(255).regex(/^.*$/),
      eventTime: z.string(),
      instanceId: z.string().optional(),
      machineId: z.string().optional(),
      resourceCpu: z.number().gte(1).lte(16).nullable(),
      resourceGpuClass: z.string(),
      resourceMemory: z.number().gte(1024).lte(61440).nullable(),
      resourceStorageAmount: z.number().gte(1073741824).lte(53687091200).nullable(),
      version: z.string(),
    })
    .transform((data) => ({
      event_name: data['eventName'],
      event_time: data['eventTime'],
      instance_id: data['instanceId'],
      machine_id: data['machineId'],
      resource_cpu: data['resourceCpu'],
      resource_gpu_class: data['resourceGpuClass'],
      resource_memory: data['resourceMemory'],
      resource_storage_amount: data['resourceStorageAmount'],
      version: data['version'],
    }));
});
