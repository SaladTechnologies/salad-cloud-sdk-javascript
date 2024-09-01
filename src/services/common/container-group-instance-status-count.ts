import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupInstanceStatusCount = z.lazy(() => {
  return z.object({
    allocatingCount: z.number().gte(0),
    creatingCount: z.number().gte(0),
    runningCount: z.number().gte(0),
    stoppingCount: z.number().gte(0),
  });
});

/**
 * Represents a container group instance status count
 * @typedef  {ContainerGroupInstanceStatusCount} containerGroupInstanceStatusCount - Represents a container group instance status count - Represents a container group instance status count
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type ContainerGroupInstanceStatusCount = z.infer<typeof containerGroupInstanceStatusCount>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupInstanceStatusCountResponse = z.lazy(() => {
  return z
    .object({
      allocating_count: z.number().gte(0),
      creating_count: z.number().gte(0),
      running_count: z.number().gte(0),
      stopping_count: z.number().gte(0),
    })
    .transform((data) => ({
      allocatingCount: data['allocating_count'],
      creatingCount: data['creating_count'],
      runningCount: data['running_count'],
      stoppingCount: data['stopping_count'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupInstanceStatusCountRequest = z.lazy(() => {
  return z
    .object({
      allocatingCount: z.number().nullish(),
      creatingCount: z.number().nullish(),
      runningCount: z.number().nullish(),
      stoppingCount: z.number().nullish(),
    })
    .transform((data) => ({
      allocating_count: data['allocatingCount'],
      creating_count: data['creatingCount'],
      running_count: data['runningCount'],
      stopping_count: data['stoppingCount'],
    }));
});
