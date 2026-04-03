import { z } from 'zod';

/**
 * Zod schema for the ContainerGroupsQuotas model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerGroupsQuotas = z.lazy(() => {
  return z.object({
    containerReplicasQuota: z.number().gte(0).lte(2147483647),
    containerReplicasUsed: z.number().gte(0).lte(2147483647),
    maxContainerGroupReallocationsPerMinute: z.number().gte(0).lte(2147483647).optional(),
    maxContainerGroupRecreatesPerMinute: z.number().gte(0).lte(2147483647).optional(),
    maxContainerGroupRestartsPerMinute: z.number().gte(0).lte(2147483647).optional(),
  });
});

/**
 * Represents the organization quotas for container groups
 * @typedef  {ContainerGroupsQuotas} containerGroupsQuotas - Represents the organization quotas for container groups - Represents the organization quotas for container groups
 * @property {number} - The maximum number of replicas that can be created for a container group
 * @property {number} - The number of replicas that are currently in use
 * @property {number} - The maximum number of container group reallocations per minute
 * @property {number} - The maximum number of container group recreates per minute
 * @property {number} - The maximum number of container group restarts per minute
 */
export type ContainerGroupsQuotas = z.infer<typeof containerGroupsQuotas>;

/**
 * Zod schema for mapping API responses to the ContainerGroupsQuotas application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupsQuotasResponse = z.lazy(() => {
  return z
    .object({
      container_replicas_quota: z.number().gte(0).lte(2147483647),
      container_replicas_used: z.number().gte(0).lte(2147483647),
      max_container_group_reallocations_per_minute: z.number().gte(0).lte(2147483647).optional(),
      max_container_group_recreates_per_minute: z.number().gte(0).lte(2147483647).optional(),
      max_container_group_restarts_per_minute: z.number().gte(0).lte(2147483647).optional(),
    })
    .transform((data) => ({
      containerReplicasQuota: data['container_replicas_quota'],
      containerReplicasUsed: data['container_replicas_used'],
      maxContainerGroupReallocationsPerMinute: data['max_container_group_reallocations_per_minute'],
      maxContainerGroupRecreatesPerMinute: data['max_container_group_recreates_per_minute'],
      maxContainerGroupRestartsPerMinute: data['max_container_group_restarts_per_minute'],
    }));
});

/**
 * Zod schema for mapping the ContainerGroupsQuotas application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupsQuotasRequest = z.lazy(() => {
  return z
    .object({
      containerReplicasQuota: z.number().gte(0).lte(2147483647),
      containerReplicasUsed: z.number().gte(0).lte(2147483647),
      maxContainerGroupReallocationsPerMinute: z.number().gte(0).lte(2147483647).optional(),
      maxContainerGroupRecreatesPerMinute: z.number().gte(0).lte(2147483647).optional(),
      maxContainerGroupRestartsPerMinute: z.number().gte(0).lte(2147483647).optional(),
    })
    .transform((data) => ({
      container_replicas_quota: data['containerReplicasQuota'],
      container_replicas_used: data['containerReplicasUsed'],
      max_container_group_reallocations_per_minute: data['maxContainerGroupReallocationsPerMinute'],
      max_container_group_recreates_per_minute: data['maxContainerGroupRecreatesPerMinute'],
      max_container_group_restarts_per_minute: data['maxContainerGroupRestartsPerMinute'],
    }));
});
