import { z } from 'zod';
import {
  containerGroupsQuotas,
  containerGroupsQuotasRequest,
  containerGroupsQuotasResponse,
} from './container-groups-quotas';

/**
 * The shape of the model inside the application code - what the users use
 */
export const quotas = z.lazy(() => {
  return z.object({
    containerGroupsQuotas: containerGroupsQuotas,
    createTime: z.string().optional(),
    updateTime: z.string().optional(),
  });
});

/**
 * Represents the organization quotas
 * @typedef  {Quotas} quotas - Represents the organization quotas - Represents the organization quotas
 * @property {ContainerGroupsQuotas}
 * @property {string} - The time the resource was created
 * @property {string} - The time the resource was last updated
 */
export type Quotas = z.infer<typeof quotas>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const quotasResponse = z.lazy(() => {
  return z
    .object({
      container_groups_quotas: containerGroupsQuotasResponse,
      create_time: z.string().optional(),
      update_time: z.string().optional(),
    })
    .transform((data) => ({
      containerGroupsQuotas: data['container_groups_quotas'],
      createTime: data['create_time'],
      updateTime: data['update_time'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const quotasRequest = z.lazy(() => {
  return z
    .object({
      containerGroupsQuotas: containerGroupsQuotasRequest.nullish(),
      createTime: z.string().nullish(),
      updateTime: z.string().nullish(),
    })
    .transform((data) => ({
      container_groups_quotas: data['containerGroupsQuotas'],
      create_time: data['createTime'],
      update_time: data['updateTime'],
    }));
});
