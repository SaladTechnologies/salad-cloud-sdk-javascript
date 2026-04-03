import { z } from 'zod';
import {
  InferenceEndpointJob,
  inferenceEndpointJob,
  inferenceEndpointJobRequest,
  inferenceEndpointJobResponse,
} from './inference-endpoint-job';

/**
 * Zod schema for the InferenceEndpointJobCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the InferenceEndpointJobCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the InferenceEndpointJobCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
