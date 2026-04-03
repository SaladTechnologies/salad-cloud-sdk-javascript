import { z } from 'zod';
import {
  ContainerGroup,
  containerGroup,
  containerGroupRequest,
  containerGroupResponse,
} from '../../common/container-group';

/**
 * Zod schema for the ContainerGroupCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the ContainerGroupCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the ContainerGroupCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
