import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupsQuotas = z.lazy(() => {
  return z.object({
    maxCreatedContainerGroups: z.number(),
    containerInstanceQuota: z.number(),
    maxContainerGroupReallocationsPerMinute: z.number().gte(0).optional(),
    maxContainerGroupRecreatesPerMinute: z.number().gte(0).optional(),
    maxContainerGroupRestartsPerMinute: z.number().gte(0).optional(),
  });
});

/**
 *
 * @typedef  {ContainerGroupsQuotas} containerGroupsQuotas
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type ContainerGroupsQuotas = z.infer<typeof containerGroupsQuotas>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupsQuotasResponse = z.lazy(() => {
  return z
    .object({
      max_created_container_groups: z.number(),
      container_instance_quota: z.number(),
      max_container_group_reallocations_per_minute: z.number().gte(0).optional(),
      max_container_group_recreates_per_minute: z.number().gte(0).optional(),
      max_container_group_restarts_per_minute: z.number().gte(0).optional(),
    })
    .transform((data) => ({
      maxCreatedContainerGroups: data['max_created_container_groups'],
      containerInstanceQuota: data['container_instance_quota'],
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
      maxCreatedContainerGroups: z.number().nullish(),
      containerInstanceQuota: z.number().nullish(),
      maxContainerGroupReallocationsPerMinute: z.number().nullish(),
      maxContainerGroupRecreatesPerMinute: z.number().nullish(),
      maxContainerGroupRestartsPerMinute: z.number().nullish(),
    })
    .transform((data) => ({
      max_created_container_groups: data['maxCreatedContainerGroups'],
      container_instance_quota: data['containerInstanceQuota'],
      max_container_group_reallocations_per_minute: data['maxContainerGroupReallocationsPerMinute'],
      max_container_group_recreates_per_minute: data['maxContainerGroupRecreatesPerMinute'],
      max_container_group_restarts_per_minute: data['maxContainerGroupRestartsPerMinute'],
    }));
});
