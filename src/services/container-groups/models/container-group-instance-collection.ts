import { z } from 'zod';
import {
  containerGroupInstance,
  containerGroupInstanceRequest,
  containerGroupInstanceResponse,
} from './container-group-instance';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupInstanceCollectionRequest = z.lazy(() => {
  return z.object({ instances: z.array(containerGroupInstanceRequest) }).transform((data) => ({
    instances: data['instances'],
  }));
});
