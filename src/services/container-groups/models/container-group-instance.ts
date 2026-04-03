import { z } from 'zod';

/**
 * Zod schema for the ContainerGroupInstance model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerGroupInstance = z.lazy(() => {
  return z.object({
    cpuPercent: z.number().gte(0).optional(),
    cpuUsage: z.number().gte(0).optional(),
    cpuUsageTotal: z.number().gte(0).optional(),
    deletionCost: z.number().gte(0).lte(100000).optional(),
    id: z.string(),
    machineId: z.string(),
    memoryUsageMb: z.number().gte(0).optional(),
    memoryUsagePercent: z.number().gte(0).optional(),
    pullingProgress: z.number().gte(0).lte(100).optional(),
    ready: z.boolean().optional(),
    sshHostKeyFingerprint: z.string().min(1).max(256).optional(),
    sshIp: z.string().optional(),
    sshPort: z.number().gte(1).lte(65535).optional(),
    started: z.boolean().optional(),
    state: z.string(),
    updateTime: z.string(),
    version: z.number().gte(1).lte(2147483647),
  });
});

/**
 * A Container Group Instance represents a running instance of a container group on a specific machine. It provides information about the execution state, readiness, and version of the deployed container group.
 * @typedef  {ContainerGroupInstance} containerGroupInstance - A Container Group Instance represents a running instance of a container group on a specific machine. It provides information about the execution state, readiness, and version of the deployed container group. - A Container Group Instance represents a running instance of a container group on a specific machine. It provides information about the execution state, readiness, and version of the deployed container group.
 * @property {number} - The percentage of CPU used by this container group instance. This is updated every minute.
 * @property {number} - The total CPU usage in seconds for this container group instance. This is updated every minute.
 * @property {number} - The total CPU usage in seconds for this container group instance since it was started. This is updated every minute.
 * @property {number} - The cost of deleting the container group instance
 * @property {string} - The container group instance identifier.
 * @property {string} - The container group machine identifier.
 * @property {number} - The memory usage in MB for this container group instance. This is updated every minute.
 * @property {number} - The percentage of memory used by this container group instance. This is updated every minute.
 * @property {number} - The progress percentage of pulling the container image. This is only relevant when the instance state is 'downloading'.
 * @property {boolean} - Indicates whether the container group instance is currently passing its readiness checks and is able to receive traffic or perform its intended function. If no readiness probe is defined, this will be true once the instance is fully started.
 * @property {string} - The SSH host key fingerprint of the container group instance
 * @property {string} - The SSH IP address of the container group instance
 * @property {number} - The SSH port of the container group instance
 * @property {boolean} - Indicates whether the container group instance has successfully completed its startup sequence and passed any configured startup probes. This will always be true when no startup probe is defined for the container group.
 * @property {TheContainerGroupInstanceState} - The state of the container group instance
 * @property {string} - The UTC timestamp when the container group instance last changed its state. This helps track the lifecycle and state transitions of the instance.
 * @property {number} - The version of the container group definition currently running on this instance. Used to track deployment and update progress across the container group fleet.
 */
export type ContainerGroupInstance = z.infer<typeof containerGroupInstance>;

/**
 * Zod schema for mapping API responses to the ContainerGroupInstance application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupInstanceResponse = z.lazy(() => {
  return z
    .object({
      cpu_percent: z.number().gte(0).optional(),
      cpu_usage: z.number().gte(0).optional(),
      cpu_usage_total: z.number().gte(0).optional(),
      deletion_cost: z.number().gte(0).lte(100000).optional(),
      id: z.string(),
      machine_id: z.string(),
      memory_usage_mb: z.number().gte(0).optional(),
      memory_usage_percent: z.number().gte(0).optional(),
      pulling_progress: z.number().gte(0).lte(100).optional(),
      ready: z.boolean().optional(),
      ssh_host_key_fingerprint: z.string().min(1).max(256).optional(),
      ssh_ip: z.string().optional(),
      ssh_port: z.number().gte(1).lte(65535).optional(),
      started: z.boolean().optional(),
      state: z.string(),
      update_time: z.string(),
      version: z.number().gte(1).lte(2147483647),
    })
    .transform((data) => ({
      cpuPercent: data['cpu_percent'],
      cpuUsage: data['cpu_usage'],
      cpuUsageTotal: data['cpu_usage_total'],
      deletionCost: data['deletion_cost'],
      id: data['id'],
      machineId: data['machine_id'],
      memoryUsageMb: data['memory_usage_mb'],
      memoryUsagePercent: data['memory_usage_percent'],
      pullingProgress: data['pulling_progress'],
      ready: data['ready'],
      sshHostKeyFingerprint: data['ssh_host_key_fingerprint'],
      sshIp: data['ssh_ip'],
      sshPort: data['ssh_port'],
      started: data['started'],
      state: data['state'],
      updateTime: data['update_time'],
      version: data['version'],
    }));
});

/**
 * Zod schema for mapping the ContainerGroupInstance application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupInstanceRequest = z.lazy(() => {
  return z
    .object({
      cpuPercent: z.number().gte(0).optional(),
      cpuUsage: z.number().gte(0).optional(),
      cpuUsageTotal: z.number().gte(0).optional(),
      deletionCost: z.number().gte(0).lte(100000).optional(),
      id: z.string(),
      machineId: z.string(),
      memoryUsageMb: z.number().gte(0).optional(),
      memoryUsagePercent: z.number().gte(0).optional(),
      pullingProgress: z.number().gte(0).lte(100).optional(),
      ready: z.boolean().optional(),
      sshHostKeyFingerprint: z.string().min(1).max(256).optional(),
      sshIp: z.string().optional(),
      sshPort: z.number().gte(1).lte(65535).optional(),
      started: z.boolean().optional(),
      state: z.string(),
      updateTime: z.string(),
      version: z.number().gte(1).lte(2147483647),
    })
    .transform((data) => ({
      cpu_percent: data['cpuPercent'],
      cpu_usage: data['cpuUsage'],
      cpu_usage_total: data['cpuUsageTotal'],
      deletion_cost: data['deletionCost'],
      id: data['id'],
      machine_id: data['machineId'],
      memory_usage_mb: data['memoryUsageMb'],
      memory_usage_percent: data['memoryUsagePercent'],
      pulling_progress: data['pullingProgress'],
      ready: data['ready'],
      ssh_host_key_fingerprint: data['sshHostKeyFingerprint'],
      ssh_ip: data['sshIp'],
      ssh_port: data['sshPort'],
      started: data['started'],
      state: data['state'],
      update_time: data['updateTime'],
      version: data['version'],
    }));
});
