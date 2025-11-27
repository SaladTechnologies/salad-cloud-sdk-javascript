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
export const queue = z.lazy(() => {
  return z.object({
    id: z.string(),
    name: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    displayName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ ,-.0-9A-Za-z]+$/),
    description: z.string().max(500).regex(/^.*$/).optional(),
    containerGroups: z.array(containerGroup).max(100),
    createTime: z.string(),
    updateTime: z.string(),
    currentQueueLength: z.number().gte(0).lte(2147483647).optional(),
  });
});

/**
 * Represents a queue.
 * @typedef  {Queue} queue - Represents a queue. - Represents a queue.
 * @property {string} - The queue identifier. This is automatically generated and assigned when the queue is created.
 * @property {string} - The queue name. This must be unique within the project.
 * @property {string} - The display name. This may be used as a more human-readable name.
 * @property {string} - The description. This may be used as a space for notes or other information about the queue.
 * @property {ContainerGroup[]} - The container groups that are part of this queue. Each container group represents a scalable set of identical containers running as a distributed service.
 * @property {string} - The date and time the queue was created.
 * @property {string} - The date and time the queue was last updated.
 * @property {number} - The current length of the queue
 */
export type Queue = z.infer<typeof queue>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const queueResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      display_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/),
      description: z.string().max(500).regex(/^.*$/).optional(),
      container_groups: z.array(containerGroupResponse).max(100),
      create_time: z.string(),
      update_time: z.string(),
      current_queue_length: z.number().gte(0).lte(2147483647).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      displayName: data['display_name'],
      description: data['description'],
      containerGroups: data['container_groups'],
      createTime: data['create_time'],
      updateTime: data['update_time'],
      currentQueueLength: data['current_queue_length'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const queueRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      displayName: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/),
      description: z.string().max(500).regex(/^.*$/).optional(),
      containerGroups: z.array(containerGroupRequest).max(100),
      createTime: z.string(),
      updateTime: z.string(),
      currentQueueLength: z.number().gte(0).lte(2147483647).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      display_name: data['displayName'],
      description: data['description'],
      container_groups: data['containerGroups'],
      create_time: data['createTime'],
      update_time: data['updateTime'],
      current_queue_length: data['currentQueueLength'],
    }));
});
