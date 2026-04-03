import { z } from 'zod';

/**
 * Zod schema for the UpdateContainerGroupNetworking model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateContainerGroupNetworking = z.lazy(() => {
  return z.object({
    port: z.number().gte(1).lte(65535).optional().nullable(),
  });
});

/**
 * Represents update container group networking parameters
 * @typedef  {UpdateContainerGroupNetworking} updateContainerGroupNetworking - Represents update container group networking parameters - Represents update container group networking parameters
 * @property {number} - The port number to expose on the container group
 */
export type UpdateContainerGroupNetworking = z.infer<typeof updateContainerGroupNetworking>;

/**
 * Zod schema for mapping API responses to the UpdateContainerGroupNetworking application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateContainerGroupNetworkingResponse = z.lazy(() => {
  return z
    .object({
      port: z.number().gte(1).lte(65535).optional().nullable(),
    })
    .transform((data) => ({
      port: data['port'],
    }));
});

/**
 * Zod schema for mapping the UpdateContainerGroupNetworking application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateContainerGroupNetworkingRequest = z.lazy(() => {
  return z
    .object({
      port: z.number().gte(1).lte(65535).optional().nullable(),
    })
    .transform((data) => ({
      port: data['port'],
    }));
});
