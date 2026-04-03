import { z } from 'zod';
import {
  InferenceEndpoint,
  inferenceEndpoint,
  inferenceEndpointRequest,
  inferenceEndpointResponse,
} from './inference-endpoint';

/**
 * Zod schema for the InferenceEndpointCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const inferenceEndpointCollection = z.lazy(() => {
  return z.object({
    items: z.array(inferenceEndpoint).max(100),
    page: z.number().gte(1).lte(2147483647),
    pageSize: z.number().gte(1).lte(100),
    totalSize: z.number().gte(0).lte(2147483647),
  });
});

/**
 * Represents a page from the collection of inference endpoints.
 * @typedef  {InferenceEndpointCollection} inferenceEndpointCollection - Represents a page from the collection of inference endpoints. - Represents a page from the collection of inference endpoints.
 * @property {InferenceEndpoint[]} - The list of inference endpoints.
 * @property {number} - The page number.
 * @property {number} - The maximum number of items per page.
 * @property {number} - The total number of items in the collection.
 */
export type InferenceEndpointCollection = z.infer<typeof inferenceEndpointCollection>;

/**
 * Zod schema for mapping API responses to the InferenceEndpointCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const inferenceEndpointCollectionResponse = z.lazy(() => {
  return z
    .object({
      items: z.array(inferenceEndpointResponse).max(100),
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
 * Zod schema for mapping the InferenceEndpointCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const inferenceEndpointCollectionRequest = z.lazy(() => {
  return z
    .object({
      items: z.array(inferenceEndpointRequest).max(100),
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
