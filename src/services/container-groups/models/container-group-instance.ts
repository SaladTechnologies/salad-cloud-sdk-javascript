import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupInstance = z.lazy(() => {
  return z.object({
    instanceId: z.string(),
    machineId: z.string(),
    state: z.string(),
    updateTime: z.string(),
    version: z.number().gte(1),
    ready: z.boolean().optional(),
    started: z.boolean().optional(),
  });
});

/**
 * Represents the details of a single container group instance
 * @typedef  {ContainerGroupInstance} containerGroupInstance - Represents the details of a single container group instance - Represents the details of a single container group instance
 * @property {string} - The unique instance ID
 * @property {string} - The machine ID
 * @property {State} - The state of the container group instance
 * @property {string} - The UTC date & time when the workload on this machine transitioned to the current state
 * @property {number} - The version of the running container group
 * @property {boolean} - Specifies whether the container group instance is currently passing its readiness check. If no readiness probe is defined, is true once fully started.
 * @property {boolean} - Specifies whether the container group instance passed its startup probe. Is always true when no startup probe is defined.
 */
export type ContainerGroupInstance = z.infer<typeof containerGroupInstance>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupInstanceResponse = z.lazy(() => {
  return z
    .object({
      instance_id: z.string(),
      machine_id: z.string(),
      state: z.string(),
      update_time: z.string(),
      version: z.number().gte(1),
      ready: z.boolean().optional(),
      started: z.boolean().optional(),
    })
    .transform((data) => ({
      instanceId: data['instance_id'],
      machineId: data['machine_id'],
      state: data['state'],
      updateTime: data['update_time'],
      version: data['version'],
      ready: data['ready'],
      started: data['started'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupInstanceRequest = z.lazy(() => {
  return z
    .object({
      instanceId: z.string().nullish(),
      machineId: z.string().nullish(),
      state: z.string().nullish(),
      updateTime: z.string().nullish(),
      version: z.number().nullish(),
      ready: z.boolean().nullish(),
      started: z.boolean().nullish(),
    })
    .transform((data) => ({
      instance_id: data['instanceId'],
      machine_id: data['machineId'],
      state: data['state'],
      update_time: data['updateTime'],
      version: data['version'],
      ready: data['ready'],
      started: data['started'],
    }));
});
