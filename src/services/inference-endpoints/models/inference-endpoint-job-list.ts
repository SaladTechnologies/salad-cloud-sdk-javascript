import { z } from 'zod';
import {
  inferenceEndpointJob,
  inferenceEndpointJobRequest,
  inferenceEndpointJobResponse,
} from './inference-endpoint-job';

/**
 * The shape of the model inside the application code - what the users use
 */
export const inferenceEndpointJobList = z.lazy(() => {
  return z.object({
    items: z.array(inferenceEndpointJob).max(100),
  });
});

/**
 * Represents a list of inference endpoint jobs
 * @typedef  {InferenceEndpointJobList} inferenceEndpointJobList - Represents a list of inference endpoint jobs - Represents a list of inference endpoint jobs
 * @property {InferenceEndpointJob[]} - The list of items
 */
export type InferenceEndpointJobList = z.infer<typeof inferenceEndpointJobList>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const inferenceEndpointJobListResponse = z.lazy(() => {
  return z
    .object({
      items: z.array(inferenceEndpointJobResponse).max(100),
    })
    .transform((data) => ({
      items: data['items'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const inferenceEndpointJobListRequest = z.lazy(() => {
  return z.object({ items: z.array(inferenceEndpointJobRequest).nullish() }).transform((data) => ({
    items: data['items'],
  }));
});
