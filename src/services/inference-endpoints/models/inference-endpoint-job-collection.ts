import { z } from 'zod';
import {
  InferenceEndpointJob,
  inferenceEndpointJob,
  inferenceEndpointJobRequest,
  inferenceEndpointJobResponse,
} from './inference-endpoint-job';

/**
 * The shape of the model inside the application code - what the users use
 */
export const inferenceEndpointJobCollection = z.lazy(() => {
  return z.object({
    items: z.array(inferenceEndpointJob).max(100),
    page: z.number().gte(1).lte(2147483647),
    pageSize: z.number().gte(1).lte(100),
    totalSize: z.number().gte(0).lte(2147483647),
  });
});

/**
 * Represents a collection of inference endpoint jobs
 * @typedef  {InferenceEndpointJobCollection} inferenceEndpointJobCollection - Represents a collection of inference endpoint jobs - Represents a collection of inference endpoint jobs
 * @property {InferenceEndpointJob[]} - The list of inference endpoint jobs.
 * @property {number} - The page number.
 * @property {number} - The maximum number of items per page.
 * @property {number} - The total number of items in the collection.
 */
export type InferenceEndpointJobCollection = z.infer<typeof inferenceEndpointJobCollection>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const inferenceEndpointJobCollectionResponse = z.lazy(() => {
  return z
    .object({
      items: z.array(inferenceEndpointJobResponse).max(100),
      page: z.number().gte(1).lte(2147483647),
      page_size: z.number().gte(1).lte(100),
      total_size: z.number().gte(0).lte(2147483647),
    })
    .transform((data) => ({
      items: data['items'],
      page: data['page'],
      pageSize: data['page_size'],
      totalSize: data['total_size'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const inferenceEndpointJobCollectionRequest = z.lazy(() => {
  return z
    .object({
      items: z.array(inferenceEndpointJobRequest).max(100),
      page: z.number().gte(1).lte(2147483647),
      pageSize: z.number().gte(1).lte(100),
      totalSize: z.number().gte(0).lte(2147483647),
    })
    .transform((data) => ({
      items: data['items'],
      page: data['page'],
      page_size: data['pageSize'],
      total_size: data['totalSize'],
    }));
});
