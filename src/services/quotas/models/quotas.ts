import { z } from 'zod';
import {
  ContainerGroupsQuotas,
  containerGroupsQuotas,
  containerGroupsQuotasRequest,
  containerGroupsQuotasResponse,
} from './container-groups-quotas';

/**
 * Zod schema for the Quotas model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * @property {ContainerGroupsQuotas} - Represents the organization quotas for container groups
 * @property {string} - The time the resource was created
 * @property {string} - The time the resource was last updated
 */
export type Quotas = z.infer<typeof quotas>;

/**
 * Zod schema for mapping API responses to the Quotas application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the Quotas application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const quotasRequest = z.lazy(() => {
  return z
    .object({
      containerGroupsQuotas: containerGroupsQuotasRequest,
      createTime: z.string().optional(),
      updateTime: z.string().optional(),
    })
    .transform((data) => ({
      container_groups_quotas: data['containerGroupsQuotas'],
      create_time: data['createTime'],
      update_time: data['updateTime'],
    }));
});
