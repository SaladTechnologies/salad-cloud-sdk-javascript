import { z } from 'zod';
import {
  ContainerGroupInstanceStatusCount,
  containerGroupInstanceStatusCount,
  containerGroupInstanceStatusCountRequest,
  containerGroupInstanceStatusCountResponse,
} from './container-group-instance-status-count';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupState = z.lazy(() => {
  return z.object({
    description: z.string().max(1000).regex(/^.*$/).optional().nullable(),
    finishTime: z.string(),
    instanceStatusCounts: containerGroupInstanceStatusCount,
    startTime: z.string(),
    status: z.string(),
  });
});

/**
 * Represents the operational state of a container group during its lifecycle, including timing information, status, and instance distribution metrics. This state captures the current execution status, start and finish times, and provides visibility into the operational health across instances.
 * @typedef  {ContainerGroupState} containerGroupState - Represents the operational state of a container group during its lifecycle, including timing information, status, and instance distribution metrics. This state captures the current execution status, start and finish times, and provides visibility into the operational health across instances. - Represents the operational state of a container group during its lifecycle, including timing information, status, and instance distribution metrics. This state captures the current execution status, start and finish times, and provides visibility into the operational health across instances.
 * @property {string} - Optional textual description or notes about the current state of the container group
 * @property {string} - Timestamp when the container group execution finished or is expected to finish
 * @property {ContainerGroupInstanceStatusCount} - A summary of container group instances categorized by their current lifecycle status
 * @property {string} - Timestamp when the container group execution started
 * @property {ContainerGroupStatus} - Represents the current operational state of a container group within the Salad platform.
 */
export type ContainerGroupState = z.infer<typeof containerGroupState>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupStateResponse = z.lazy(() => {
  return z
    .object({
      description: z.string().max(1000).regex(/^.*$/).optional().nullable(),
      finish_time: z.string(),
      instance_status_counts: containerGroupInstanceStatusCountResponse,
      start_time: z.string(),
      status: z.string(),
    })
    .transform((data) => ({
      description: data['description'],
      finishTime: data['finish_time'],
      instanceStatusCounts: data['instance_status_counts'],
      startTime: data['start_time'],
      status: data['status'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupStateRequest = z.lazy(() => {
  return z
    .object({
      description: z.string().nullable().optional(),
      finishTime: z.string(),
      instanceStatusCounts: containerGroupInstanceStatusCountRequest,
      startTime: z.string(),
      status: z.string(),
    })
    .transform((data) => ({
      description: data['description'],
      finish_time: data['finishTime'],
      instance_status_counts: data['instanceStatusCounts'],
      start_time: data['startTime'],
      status: data['status'],
    }));
});
