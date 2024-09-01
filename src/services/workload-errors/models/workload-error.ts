import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const workloadError = z.lazy(() => {
  return z.object({
    detail: z.string(),
    failedAt: z.string(),
    instanceId: z.string(),
    machineId: z.string(),
    allocatedAt: z.string(),
    startedAt: z.string().optional().nullable(),
    version: z.number().gte(1),
  });
});

/**
 * Represents a workload error
 * @typedef  {WorkloadError} workloadError - Represents a workload error - Represents a workload error
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 */
export type WorkloadError = z.infer<typeof workloadError>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const workloadErrorResponse = z.lazy(() => {
  return z
    .object({
      detail: z.string(),
      failed_at: z.string(),
      instance_id: z.string(),
      machine_id: z.string(),
      allocated_at: z.string(),
      started_at: z.string().optional().nullable(),
      version: z.number().gte(1),
    })
    .transform((data) => ({
      detail: data['detail'],
      failedAt: data['failed_at'],
      instanceId: data['instance_id'],
      machineId: data['machine_id'],
      allocatedAt: data['allocated_at'],
      startedAt: data['started_at'],
      version: data['version'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const workloadErrorRequest = z.lazy(() => {
  return z
    .object({
      detail: z.string().nullish(),
      failedAt: z.string().nullish(),
      instanceId: z.string().nullish(),
      machineId: z.string().nullish(),
      allocatedAt: z.string().nullish(),
      startedAt: z.string().nullish(),
      version: z.number().nullish(),
    })
    .transform((data) => ({
      detail: data['detail'],
      failed_at: data['failedAt'],
      instance_id: data['instanceId'],
      machine_id: data['machineId'],
      allocated_at: data['allocatedAt'],
      started_at: data['startedAt'],
      version: data['version'],
    }));
});
