import { z } from 'zod';
import {
  containerGroupInstanceStatusCount,
  containerGroupInstanceStatusCountRequest,
  containerGroupInstanceStatusCountResponse,
} from './container-group-instance-status-count';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupState = z.lazy(() => {
  return z.object({
    status: z.string(),
    description: z.string().optional().nullable(),
    startTime: z.string(),
    finishTime: z.string(),
    instanceStatusCounts: containerGroupInstanceStatusCount,
  });
});

/**
 * Represents a container group state
 * @typedef  {ContainerGroupState} containerGroupState - Represents a container group state - Represents a container group state
 * @property {ContainerGroupStatus}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {ContainerGroupInstanceStatusCount} - Represents a container group instance status count
 */
export type ContainerGroupState = z.infer<typeof containerGroupState>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupStateResponse = z.lazy(() => {
  return z
    .object({
      status: z.string(),
      description: z.string().optional().nullable(),
      start_time: z.string(),
      finish_time: z.string(),
      instance_status_counts: containerGroupInstanceStatusCountResponse,
    })
    .transform((data) => ({
      status: data['status'],
      description: data['description'],
      startTime: data['start_time'],
      finishTime: data['finish_time'],
      instanceStatusCounts: data['instance_status_counts'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupStateRequest = z.lazy(() => {
  return z
    .object({
      status: z.string().nullish(),
      description: z.string().nullish(),
      startTime: z.string().nullish(),
      finishTime: z.string().nullish(),
      instanceStatusCounts: containerGroupInstanceStatusCountRequest.nullish(),
    })
    .transform((data) => ({
      status: data['status'],
      description: data['description'],
      start_time: data['startTime'],
      finish_time: data['finishTime'],
      instance_status_counts: data['instanceStatusCounts'],
    }));
});
