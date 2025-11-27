import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupInstance = z.lazy(() => {
  return z.object({
    id: z.string(),
    machineId: z.string(),
    sshIp: z.string().optional(),
    sshPort: z.number().gte(1).lte(65535).optional(),
    sshHostKeyFingerprint: z.string().min(1).max(256).optional(),
    state: z.string(),
    updateTime: z.string(),
    version: z.number().gte(1).lte(2147483647),
    ready: z.boolean().optional(),
    started: z.boolean().optional(),
    deletionCost: z.number().gte(0).lte(100000).optional(),
  });
});

/**
 * A Container Group Instance represents a running instance of a container group on a specific machine. It provides information about the execution state, readiness, and version of the deployed container group.
 * @typedef  {ContainerGroupInstance} containerGroupInstance - A Container Group Instance represents a running instance of a container group on a specific machine. It provides information about the execution state, readiness, and version of the deployed container group. - A Container Group Instance represents a running instance of a container group on a specific machine. It provides information about the execution state, readiness, and version of the deployed container group.
 * @property {string} - The container group instance identifier.
 * @property {string} - The container group machine identifier.
 * @property {string} - The SSH IP address of the container group instance
 * @property {number} - The SSH port of the container group instance
 * @property {string} - The SSH host key fingerprint of the container group instance
 * @property {TheContainerGroupInstanceState} - The state of the container group instance
 * @property {string} - The UTC timestamp when the container group instance last changed its state. This helps track the lifecycle and state transitions of the instance.
 * @property {number} - The version of the container group definition currently running on this instance. Used to track deployment and update progress across the container group fleet.
 * @property {boolean} - Indicates whether the container group instance is currently passing its readiness checks and is able to receive traffic or perform its intended function. If no readiness probe is defined, this will be true once the instance is fully started.
 * @property {boolean} - Indicates whether the container group instance has successfully completed its startup sequence and passed any configured startup probes. This will always be true when no startup probe is defined for the container group.
 * @property {number} - The cost of deleting the container group instance
 */
export type ContainerGroupInstance = z.infer<typeof containerGroupInstance>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupInstanceResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      machine_id: z.string(),
      ssh_ip: z.string().optional(),
      ssh_port: z.number().gte(1).lte(65535).optional(),
      ssh_host_key_fingerprint: z.string().min(1).max(256).optional(),
      state: z.string(),
      update_time: z.string(),
      version: z.number().gte(1).lte(2147483647),
      ready: z.boolean().optional(),
      started: z.boolean().optional(),
      deletion_cost: z.number().gte(0).lte(100000).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      machineId: data['machine_id'],
      sshIp: data['ssh_ip'],
      sshPort: data['ssh_port'],
      sshHostKeyFingerprint: data['ssh_host_key_fingerprint'],
      state: data['state'],
      updateTime: data['update_time'],
      version: data['version'],
      ready: data['ready'],
      started: data['started'],
      deletionCost: data['deletion_cost'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupInstanceRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      machineId: z.string(),
      sshIp: z.string().optional(),
      sshPort: z.number().gte(1).lte(65535).optional(),
      sshHostKeyFingerprint: z.string().min(1).max(256).optional(),
      state: z.string(),
      updateTime: z.string(),
      version: z.number().gte(1).lte(2147483647),
      ready: z.boolean().optional(),
      started: z.boolean().optional(),
      deletionCost: z.number().gte(0).lte(100000).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      machine_id: data['machineId'],
      ssh_ip: data['sshIp'],
      ssh_port: data['sshPort'],
      ssh_host_key_fingerprint: data['sshHostKeyFingerprint'],
      state: data['state'],
      update_time: data['updateTime'],
      version: data['version'],
      ready: data['ready'],
      started: data['started'],
      deletion_cost: data['deletionCost'],
    }));
});
