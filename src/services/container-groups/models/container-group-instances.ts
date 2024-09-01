import { z } from 'zod';
import {
  containerGroupInstance,
  containerGroupInstanceRequest,
  containerGroupInstanceResponse,
} from './container-group-instance';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupInstances = z.lazy(() => {
  return z.object({
    instances: z.array(containerGroupInstance).max(1000),
  });
});

/**
 * Represents a list of container group instances
 * @typedef  {ContainerGroupInstances} containerGroupInstances - Represents a list of container group instances - Represents a list of container group instances
 * @property {ContainerGroupInstance[]}
 */
export type ContainerGroupInstances = z.infer<typeof containerGroupInstances>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupInstancesResponse = z.lazy(() => {
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
export const containerGroupInstancesRequest = z.lazy(() => {
  return z.object({ instances: z.array(containerGroupInstanceRequest).nullish() }).transform((data) => ({
    instances: data['instances'],
  }));
});
