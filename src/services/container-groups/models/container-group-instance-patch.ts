import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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
