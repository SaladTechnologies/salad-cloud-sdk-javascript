import { z } from 'zod';
import { containerGroup, containerGroupRequest, containerGroupResponse } from '../../common/container-group';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupList = z.lazy(() => {
  return z.object({
    items: z.array(containerGroup).max(100),
  });
});

/**
 * Represents a list of container groups
 * @typedef  {ContainerGroupList} containerGroupList - Represents a list of container groups - Represents a list of container groups
 * @property {ContainerGroup[]}
 */
export type ContainerGroupList = z.infer<typeof containerGroupList>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupListResponse = z.lazy(() => {
  return z
    .object({
      items: z.array(containerGroupResponse).max(100),
    })
    .transform((data) => ({
      items: data['items'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupListRequest = z.lazy(() => {
  return z.object({ items: z.array(containerGroupRequest).nullish() }).transform((data) => ({
    items: data['items'],
  }));
});
