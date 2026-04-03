import { z } from 'zod';

/**
 * Zod schema for the ContainerGroupInstanceStatusCount model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerGroupInstanceStatusCount = z.lazy(() => {
  return z.object({
    allocatingCount: z.number().gte(0).lte(2147483647),
    creatingCount: z.number().gte(0).lte(2147483647),
    runningCount: z.number().gte(0).lte(2147483647),
    stoppingCount: z.number().gte(0).lte(2147483647),
  });
});

/**
 * A summary of container group instances categorized by their current lifecycle status
 * @typedef  {ContainerGroupInstanceStatusCount} containerGroupInstanceStatusCount - A summary of container group instances categorized by their current lifecycle status - A summary of container group instances categorized by their current lifecycle status
 * @property {number} - The number of container instances that are currently being allocated resources
 * @property {number} - The number of container instances that are in the process of being created
 * @property {number} - The number of container instances that are currently running and operational
 * @property {number} - The number of container instances that are in the process of stopping
 */
export type ContainerGroupInstanceStatusCount = z.infer<typeof containerGroupInstanceStatusCount>;

/**
 * Zod schema for mapping API responses to the ContainerGroupInstanceStatusCount application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupInstanceStatusCountResponse = z.lazy(() => {
  return z
    .object({
      allocating_count: z.number().gte(0).lte(2147483647),
      creating_count: z.number().gte(0).lte(2147483647),
      running_count: z.number().gte(0).lte(2147483647),
      stopping_count: z.number().gte(0).lte(2147483647),
    })
    .transform((data) => ({
      allocatingCount: data['allocating_count'],
      creatingCount: data['creating_count'],
      runningCount: data['running_count'],
      stoppingCount: data['stopping_count'],
    }));
});

/**
 * Zod schema for mapping the ContainerGroupInstanceStatusCount application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupInstanceStatusCountRequest = z.lazy(() => {
  return z
    .object({
      allocatingCount: z.number().gte(0).lte(2147483647),
      creatingCount: z.number().gte(0).lte(2147483647),
      runningCount: z.number().gte(0).lte(2147483647),
      stoppingCount: z.number().gte(0).lte(2147483647),
    })
    .transform((data) => ({
      allocating_count: data['allocatingCount'],
      creating_count: data['creatingCount'],
      running_count: data['runningCount'],
      stopping_count: data['stoppingCount'],
    }));
});
