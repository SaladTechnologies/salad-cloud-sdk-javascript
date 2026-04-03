import { z } from 'zod';

/**
 * Zod schema for the ContainerGroupInstancePatch model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerGroupInstancePatch = z.lazy(() => {
  return z.object({
    deletionCost: z.number().gte(0).lte(100000).optional().nullable(),
  });
});

/**
 * Represents a request to update a container group instance
 * @typedef  {ContainerGroupInstancePatch} containerGroupInstancePatch - Represents a request to update a container group instance - Represents a request to update a container group instance
 * @property {number} - The cost of deleting the container group instance
 */
export type ContainerGroupInstancePatch = z.infer<typeof containerGroupInstancePatch>;

/**
 * Zod schema for mapping API responses to the ContainerGroupInstancePatch application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupInstancePatchResponse = z.lazy(() => {
  return z
    .object({
      deletion_cost: z.number().gte(0).lte(100000).optional().nullable(),
    })
    .transform((data) => ({
      deletionCost: data['deletion_cost'],
    }));
});

/**
 * Zod schema for mapping the ContainerGroupInstancePatch application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupInstancePatchRequest = z.lazy(() => {
  return z
    .object({
      deletionCost: z.number().gte(0).lte(100000).optional().nullable(),
    })
    .transform((data) => ({
      deletion_cost: data['deletionCost'],
    }));
});
