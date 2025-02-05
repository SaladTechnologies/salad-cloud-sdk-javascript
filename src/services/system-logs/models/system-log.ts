import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const systemLog = z.lazy(() => {
  return z.object({
    eventName: z.string(),
    eventTime: z.string(),
    instanceId: z.string().optional(),
    machineId: z.string().optional(),
    version: z.string(),
    resourceCpu: z.number().gte(1).lte(16).nullable(),
    resourceMemory: z.number().gte(1024).lte(61440).nullable(),
    resourceGpuClass: z.string(),
    resourceStorageAmount: z.number().gte(1073741824).lte(53687091200).nullable(),
  });
});

/**
 * Represents a system log
 * @typedef  {SystemLog} systemLog - Represents a system log - Represents a system log
 * @property {string} - The name of the event
 * @property {string} - The UTC date & time when the log item was created
 * @property {string} - The unique instance ID
 * @property {string} - The organization-specific machine ID
 * @property {string} - The version instance ID
 * @property {number} - The number of CPUs
 * @property {number} - The memory amount in MB
 * @property {string} - The GPU class name
 * @property {number} - The storage amount in bytes
 */
export type SystemLog = z.infer<typeof systemLog>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const systemLogResponse = z.lazy(() => {
  return z
    .object({
      event_name: z.string(),
      event_time: z.string(),
      instance_id: z.string().optional(),
      machine_id: z.string().optional(),
      version: z.string(),
      resource_cpu: z.number().gte(1).lte(16).nullable(),
      resource_memory: z.number().gte(1024).lte(61440).nullable(),
      resource_gpu_class: z.string(),
      resource_storage_amount: z.number().gte(1073741824).lte(53687091200).nullable(),
    })
    .transform((data) => ({
      eventName: data['event_name'],
      eventTime: data['event_time'],
      instanceId: data['instance_id'],
      machineId: data['machine_id'],
      version: data['version'],
      resourceCpu: data['resource_cpu'],
      resourceMemory: data['resource_memory'],
      resourceGpuClass: data['resource_gpu_class'],
      resourceStorageAmount: data['resource_storage_amount'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const systemLogRequest = z.lazy(() => {
  return z
    .object({
      eventName: z.string().nullish(),
      eventTime: z.string().nullish(),
      instanceId: z.string().nullish(),
      machineId: z.string().nullish(),
      version: z.string().nullish(),
      resourceCpu: z.number().nullish(),
      resourceMemory: z.number().nullish(),
      resourceGpuClass: z.string().nullish(),
      resourceStorageAmount: z.number().nullish(),
    })
    .transform((data) => ({
      event_name: data['eventName'],
      event_time: data['eventTime'],
      instance_id: data['instanceId'],
      machine_id: data['machineId'],
      version: data['version'],
      resource_cpu: data['resourceCpu'],
      resource_memory: data['resourceMemory'],
      resource_gpu_class: data['resourceGpuClass'],
      resource_storage_amount: data['resourceStorageAmount'],
    }));
});
