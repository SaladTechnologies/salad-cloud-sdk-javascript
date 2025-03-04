import { z } from 'zod';
import { inferenceEndpoint, inferenceEndpointRequest, inferenceEndpointResponse } from './inference-endpoint';

/**
 * The shape of the model inside the application code - what the users use
 */
export const inferenceEndpointList = z.lazy(() => {
  return z.object({
    items: z.array(inferenceEndpoint).max(100),
    page: z.number().gte(1).lte(2147483647),
    pageSize: z.number().gte(1).lte(100),
    totalSize: z.number().gte(0).lte(2147483647),
  });
});

/**
 * Represents a page from the collection of inference endpoints.
 * @typedef  {InferenceEndpointList} inferenceEndpointList - Represents a page from the collection of inference endpoints. - Represents a page from the collection of inference endpoints.
 * @property {InferenceEndpoint[]} - The list of inference endpoints.
 * @property {number} - The page number.
 * @property {number} - The maximum number of items per page.
 * @property {number} - The total number of items in the collection.
 */
export type InferenceEndpointList = z.infer<typeof inferenceEndpointList>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const inferenceEndpointListResponse = z.lazy(() => {
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const inferenceEndpointListRequest = z.lazy(() => {
  return z
    .object({
      items: z.array(inferenceEndpointRequest).nullish(),
      page: z.number().nullish(),
      pageSize: z.number().nullish(),
      totalSize: z.number().nullish(),
    })
    .transform((data) => ({
      items: data['items'],
      page: data['page'],
      page_size: data['pageSize'],
      total_size: data['totalSize'],
    }));
});
