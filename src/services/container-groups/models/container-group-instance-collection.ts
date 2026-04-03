import { z } from 'zod';
import {
  ContainerGroupInstance,
  containerGroupInstance,
  containerGroupInstanceRequest,
  containerGroupInstanceResponse,
} from './container-group-instance';

/**
 * Zod schema for the ContainerGroupInstanceCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerGroupInstanceCollection = z.lazy(() => {
  return z.object({
    instances: z.array(containerGroupInstance).max(1000),
  });
});

/**
 * A collection of container group instances returned as part of a paginated response or batch operation result.
 * @typedef  {ContainerGroupInstanceCollection} containerGroupInstanceCollection - A collection of container group instances returned as part of a paginated response or batch operation result. - A collection of container group instances returned as part of a paginated response or batch operation result.
 * @property {ContainerGroupInstance[]} - An array of container group instances, each representing a deployed container group with its current state and configuration information.
 */
export type ContainerGroupInstanceCollection = z.infer<typeof containerGroupInstanceCollection>;

/**
 * Zod schema for mapping API responses to the ContainerGroupInstanceCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupInstanceCollectionResponse = z.lazy(() => {
  return z
    .object({
      instances: z.array(containerGroupInstanceResponse).max(1000),
    })
    .transform((data) => ({
      instances: data['instances'],
    }));
});

/**
 * Zod schema for mapping the ContainerGroupInstanceCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupInstanceCollectionRequest = z.lazy(() => {
  return z
    .object({
      instances: z.array(containerGroupInstanceRequest).max(1000),
    })
    .transform((data) => ({
      instances: data['instances'],
    }));
});
