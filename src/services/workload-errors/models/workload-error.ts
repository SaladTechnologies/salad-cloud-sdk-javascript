import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const workloadError = z.lazy(() => {
  return z.object({
    allocatedAt: z.string(),
    detail: z.string().min(1).max(255).regex(/^.*$/),
    failedAt: z.string(),
    instanceId: z.string(),
    machineId: z.string(),
    startedAt: z.string().optional(),
    version: z.number().gte(1).lte(2147483647),
  });
});

/**
 * Represents a workload error
 * @typedef  {WorkloadError} workloadError - Represents a workload error - Represents a workload error
 * @property {string} - The timestamp when the workload was initially allocated to a machine
 * @property {string} - A detailed error message describing the nature and cause of the workload failure
 * @property {string} - The timestamp when the workload failure was detected or reported
 * @property {string} - The container group instance identifier.
 * @property {string} - The container group machine identifier.
 * @property {string} - The timestamp when the workload started execution, or null if it failed before starting
 * @property {number} - The schema version number for this error record, used for tracking error format changes
 */
export type WorkloadError = z.infer<typeof workloadError>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const workloadErrorResponse = z.lazy(() => {
  return z
    .object({
      allocated_at: z.string(),
      detail: z.string().min(1).max(255).regex(/^.*$/),
      failed_at: z.string(),
      instance_id: z.string(),
      machine_id: z.string(),
      started_at: z.string().optional(),
      version: z.number().gte(1).lte(2147483647),
    })
    .transform((data) => ({
      allocatedAt: data['allocated_at'],
      detail: data['detail'],
      failedAt: data['failed_at'],
      instanceId: data['instance_id'],
      machineId: data['machine_id'],
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
      allocatedAt: z.string(),
      detail: z.string(),
      failedAt: z.string(),
      instanceId: z.string(),
      machineId: z.string(),
      startedAt: z.string().optional(),
      version: z.number(),
    })
    .transform((data) => ({
      allocated_at: data['allocatedAt'],
      detail: data['detail'],
      failed_at: data['failedAt'],
      instance_id: data['instanceId'],
      machine_id: data['machineId'],
      started_at: data['startedAt'],
      version: data['version'],
    }));
});
