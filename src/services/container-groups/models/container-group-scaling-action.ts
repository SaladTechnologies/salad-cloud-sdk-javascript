import { z } from 'zod';

/**
 * Zod schema for the ContainerGroupScalingAction model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerGroupScalingAction = z.lazy(() => {
  return z.object({
    replicas: z.number().gte(0).lte(500),
    schedule: z.string().regex(/^([0-9A-Za-z*\/,-]+)([\t ]+[0-9A-Za-z*\/,-]+){4}$/),
  });
});

/**
 * Represents a scaling action configuration for a container group
 * @typedef  {ContainerGroupScalingAction} containerGroupScalingAction - Represents a scaling action configuration for a container group - Represents a scaling action configuration for a container group
 * @property {number} - The number of replicas to scale to during the scheduled period
 * @property {string} - The cron-style schedule string defining when the scaling should occur
 */
export type ContainerGroupScalingAction = z.infer<typeof containerGroupScalingAction>;

/**
 * Zod schema for mapping API responses to the ContainerGroupScalingAction application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupScalingActionResponse = z.lazy(() => {
  return z
    .object({
      replicas: z.number().gte(0).lte(500),
      schedule: z.string().regex(/^([0-9A-Za-z*\/,-]+)([\t ]+[0-9A-Za-z*\/,-]+){4}$/),
    })
    .transform((data) => ({
      replicas: data['replicas'],
      schedule: data['schedule'],
    }));
});

/**
 * Zod schema for mapping the ContainerGroupScalingAction application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupScalingActionRequest = z.lazy(() => {
  return z
    .object({
      replicas: z.number().gte(0).lte(500),
      schedule: z.string().regex(/^([0-9A-Za-z*\/,-]+)([\t ]+[0-9A-Za-z*\/,-]+){4}$/),
    })
    .transform((data) => ({
      replicas: data['replicas'],
      schedule: data['schedule'],
    }));
});
