import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupsQuotas = z.lazy(() => {
  return z.object({
    maxCreatedContainerGroups: z.number().gte(0).lte(10000).optional(),
    containerInstanceQuota: z.number().gte(0).lte(500).optional(),
    containerReplicaQuota: z.number().gte(0).lte(500).optional(),
    containerReplicasUsed: z.number().gte(0).lte(500).optional(),
    maxContainerGroupReallocationsPerMinute: z.number().gte(0).lte(100).optional(),
    maxContainerGroupRecreatesPerMinute: z.number().gte(0).lte(100).optional(),
    maxContainerGroupRestartsPerMinute: z.number().gte(0).lte(100).optional(),
  });
});

/**
 * Represents the organization quotas for container groups
 * @typedef  {ContainerGroupsQuotas} containerGroupsQuotas - Represents the organization quotas for container groups - Represents the organization quotas for container groups
 * @property {number} - The maximum number of container groups that can be created
 * @property {number} - The maximum number of replicas that can be created for a container group
 * @property {number} - The maximum number of replicas that can be created for a container group
 * @property {number} - The number of replicas that are currently in use
 * @property {number} - The maximum number of container group reallocations per minute
 * @property {number} - The maximum number of container group recreates per minute
 * @property {number} - The maximum number of container group restarts per minute
 */
export type ContainerGroupsQuotas = z.infer<typeof containerGroupsQuotas>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupsQuotasResponse = z.lazy(() => {
  return z
    .object({
      max_created_container_groups: z.number().gte(0).lte(10000).optional(),
      container_instance_quota: z.number().gte(0).lte(500).optional(),
      container_replica_quota: z.number().gte(0).lte(500).optional(),
      container_replicas_used: z.number().gte(0).lte(500).optional(),
      max_container_group_reallocations_per_minute: z.number().gte(0).lte(100).optional(),
      max_container_group_recreates_per_minute: z.number().gte(0).lte(100).optional(),
      max_container_group_restarts_per_minute: z.number().gte(0).lte(100).optional(),
    })
    .transform((data) => ({
      maxCreatedContainerGroups: data['max_created_container_groups'],
      containerInstanceQuota: data['container_instance_quota'],
      containerReplicaQuota: data['container_replica_quota'],
      containerReplicasUsed: data['container_replicas_used'],
      maxContainerGroupReallocationsPerMinute: data['max_container_group_reallocations_per_minute'],
      maxContainerGroupRecreatesPerMinute: data['max_container_group_recreates_per_minute'],
      maxContainerGroupRestartsPerMinute: data['max_container_group_restarts_per_minute'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupsQuotasRequest = z.lazy(() => {
  return z
    .object({
      maxCreatedContainerGroups: z.number().optional(),
      containerInstanceQuota: z.number().optional(),
      containerReplicaQuota: z.number().optional(),
      containerReplicasUsed: z.number().optional(),
      maxContainerGroupReallocationsPerMinute: z.number().optional(),
      maxContainerGroupRecreatesPerMinute: z.number().optional(),
      maxContainerGroupRestartsPerMinute: z.number().optional(),
    })
    .transform((data) => ({
      max_created_container_groups: data['maxCreatedContainerGroups'],
      container_instance_quota: data['containerInstanceQuota'],
      container_replica_quota: data['containerReplicaQuota'],
      container_replicas_used: data['containerReplicasUsed'],
      max_container_group_reallocations_per_minute: data['maxContainerGroupReallocationsPerMinute'],
      max_container_group_recreates_per_minute: data['maxContainerGroupRecreatesPerMinute'],
      max_container_group_restarts_per_minute: data['maxContainerGroupRestartsPerMinute'],
    }));
});
