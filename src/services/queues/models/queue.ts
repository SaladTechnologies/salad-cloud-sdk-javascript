import { z } from 'zod';
import { containerGroup, containerGroupRequest, containerGroupResponse } from '../../common/container-group';

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
    description: z.string().max(500).optional().nullable(),
    containerGroups: z.array(containerGroup).max(100),
    createTime: z.string(),
    updateTime: z.string(),
  });
});

/**
 * Represents a queue
 * @typedef  {Queue} queue - Represents a queue - Represents a queue
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string} - The description
 * @property {ContainerGroup[]}
 * @property {string}
 * @property {string}
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
      description: z.string().max(500).optional().nullable(),
      container_groups: z.array(containerGroupResponse).max(100),
      create_time: z.string(),
      update_time: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      displayName: data['display_name'],
      description: data['description'],
      containerGroups: data['container_groups'],
      createTime: data['create_time'],
      updateTime: data['update_time'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const queueRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      name: z.string().nullish(),
      displayName: z.string().nullish(),
      description: z.string().nullish(),
      containerGroups: z.array(containerGroupRequest).nullish(),
      createTime: z.string().nullish(),
      updateTime: z.string().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      display_name: data['displayName'],
      description: data['description'],
      container_groups: data['containerGroups'],
      create_time: data['createTime'],
      update_time: data['updateTime'],
    }));
});
