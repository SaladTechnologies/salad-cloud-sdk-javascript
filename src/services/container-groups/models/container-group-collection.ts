import { z } from 'zod';
import {
  ContainerGroup,
  containerGroup,
  containerGroupRequest,
  containerGroupResponse,
} from '../../common/container-group';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupCollection = z.lazy(() => {
  return z.object({
    items: z.array(containerGroup).max(100),
  });
});

/**
 * A paginated collection of container groups that provides a structured way to access multiple container group resources in a single response.
 * @typedef  {ContainerGroupCollection} containerGroupCollection - A paginated collection of container groups that provides a structured way to access multiple container group resources in a single response. - A paginated collection of container groups that provides a structured way to access multiple container group resources in a single response.
 * @property {ContainerGroup[]} - An array containing container group objects. Each object represents a discrete container group with its own properties, configuration, and status.
 */
export type ContainerGroupCollection = z.infer<typeof containerGroupCollection>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupCollectionResponse = z.lazy(() => {
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
export const containerGroupCollectionRequest = z.lazy(() => {
  return z
    .object({
      items: z.array(containerGroupRequest).max(100),
    })
    .transform((data) => ({
      items: data['items'],
    }));
});
