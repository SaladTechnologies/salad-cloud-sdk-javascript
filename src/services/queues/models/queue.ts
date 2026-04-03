import { z } from 'zod';
import {
  ContainerGroup,
  containerGroup,
  containerGroupRequest,
  containerGroupResponse,
} from '../../common/container-group';

/**
 * Zod schema for the Queue model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const queue = z.lazy(() => {
  return z.object({
    containerGroups: z.array(containerGroup).max(100),
    createTime: z.string(),
    currentQueueLength: z.number().gte(0).lte(2147483647).optional(),
    description: z.string().max(500).regex(/^.*$/).optional(),
    displayName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ ,-.0-9A-Za-z]+$/),
    id: z.string(),
    name: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    updateTime: z.string(),
  });
});

/**
 * Represents a queue.
 * @typedef  {Queue} queue - Represents a queue. - Represents a queue.
 * @property {ContainerGroup[]} - The container groups that are part of this queue. Each container group represents a scalable set of identical containers running as a distributed service.
 * @property {string} - The date and time the queue was created.
 * @property {number} - The current length of the queue
 * @property {string} - The description. This may be used as a space for notes or other information about the queue.
 * @property {string} - The display name. This may be used as a more human-readable name.
 * @property {string} - The queue identifier. This is automatically generated and assigned when the queue is created.
 * @property {string} - The queue name. This must be unique within the project.
 * @property {string} - The date and time the queue was last updated.
 */
export type Queue = z.infer<typeof queue>;

/**
 * Zod schema for mapping API responses to the Queue application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const queueResponse = z.lazy(() => {
  return z
    .object({
      container_groups: z.array(containerGroupResponse).max(100),
      create_time: z.string(),
      current_queue_length: z.number().gte(0).lte(2147483647).optional(),
      description: z.string().max(500).regex(/^.*$/).optional(),
      display_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/),
      id: z.string(),
      name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      update_time: z.string(),
    })
    .transform((data) => ({
      containerGroups: data['container_groups'],
      createTime: data['create_time'],
      currentQueueLength: data['current_queue_length'],
      description: data['description'],
      displayName: data['display_name'],
      id: data['id'],
      name: data['name'],
      updateTime: data['update_time'],
    }));
});

/**
 * Zod schema for mapping the Queue application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const queueRequest = z.lazy(() => {
  return z
    .object({
      containerGroups: z.array(containerGroupRequest).max(100),
      createTime: z.string(),
      currentQueueLength: z.number().gte(0).lte(2147483647).optional(),
      description: z.string().max(500).regex(/^.*$/).optional(),
      displayName: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/),
      id: z.string(),
      name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      updateTime: z.string(),
    })
    .transform((data) => ({
      container_groups: data['containerGroups'],
      create_time: data['createTime'],
      current_queue_length: data['currentQueueLength'],
      description: data['description'],
      display_name: data['displayName'],
      id: data['id'],
      name: data['name'],
      update_time: data['updateTime'],
    }));
});
