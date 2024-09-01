import { z } from 'zod';
import { inferenceEndpoint, inferenceEndpointRequest, inferenceEndpointResponse } from './inference-endpoint';

/**
 * The shape of the model inside the application code - what the users use
 */
export const inferenceEndpointsList = z.lazy(() => {
  return z.object({
    items: z.array(inferenceEndpoint).max(100),
  });
});

/**
 * Represents a list of inference endpoints
 * @typedef  {InferenceEndpointsList} inferenceEndpointsList - Represents a list of inference endpoints - Represents a list of inference endpoints
 * @property {InferenceEndpoint[]} - The list of items
 */
export type InferenceEndpointsList = z.infer<typeof inferenceEndpointsList>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const inferenceEndpointsListResponse = z.lazy(() => {
  return z
    .object({
      items: z.array(inferenceEndpointResponse).max(100),
    })
    .transform((data) => ({
      items: data['items'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const inferenceEndpointsListRequest = z.lazy(() => {
  return z.object({ items: z.array(inferenceEndpointRequest).nullish() }).transform((data) => ({
    items: data['items'],
  }));
});
