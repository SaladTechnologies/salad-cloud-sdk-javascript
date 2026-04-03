import { z } from 'zod';

/**
 * Zod schema for the InferenceEndpoint model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const inferenceEndpoint = z.lazy(() => {
  return z.object({
    description: z.string().max(1000).regex(/^.*$/),
    displayName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ ,-.0-9A-Za-z]+$/),
    iconUrl: z.string().min(1).max(2048).regex(/^.*$/),
    id: z.string(),
    inputSchema: z.string().min(1).max(100000).regex(/^.*$/),
    name: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    organizationName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    outputSchema: z.string().min(1).max(100000).regex(/^.*$/),
    priceDescription: z.string().min(1).max(100).regex(/^.*$/),
    readme: z.string().min(1).max(100000).regex(/^.*$/),
  });
});

/**
 * Represents an inference endpoint
 * @typedef  {InferenceEndpoint} inferenceEndpoint - Represents an inference endpoint - Represents an inference endpoint
 * @property {string} - The detailed description of the resource.
 * @property {string} - The display-friendly name of the resource.
 * @property {string} - The URL of the icon image
 * @property {string} - The inference endpoint identifier.
 * @property {string} - The input schema
 * @property {string} - The inference endpoint name.
 * @property {string} - The organization name.
 * @property {string} - The output schema
 * @property {string} - A description of the price
 * @property {string} - A markdown file containing a detailed description of the inference endpoint
 */
export type InferenceEndpoint = z.infer<typeof inferenceEndpoint>;

/**
 * Zod schema for mapping API responses to the InferenceEndpoint application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const inferenceEndpointResponse = z.lazy(() => {
  return z
    .object({
      description: z.string().max(1000).regex(/^.*$/),
      display_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/),
      icon_url: z.string().min(1).max(2048).regex(/^.*$/),
      id: z.string(),
      input_schema: z.string().min(1).max(100000).regex(/^.*$/),
      name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      organization_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      output_schema: z.string().min(1).max(100000).regex(/^.*$/),
      price_description: z.string().min(1).max(100).regex(/^.*$/),
      readme: z.string().min(1).max(100000).regex(/^.*$/),
    })
    .transform((data) => ({
      description: data['description'],
      displayName: data['display_name'],
      iconUrl: data['icon_url'],
      id: data['id'],
      inputSchema: data['input_schema'],
      name: data['name'],
      organizationName: data['organization_name'],
      outputSchema: data['output_schema'],
      priceDescription: data['price_description'],
      readme: data['readme'],
    }));
});

/**
 * Zod schema for mapping the InferenceEndpoint application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const inferenceEndpointRequest = z.lazy(() => {
  return z
    .object({
      description: z.string().max(1000).regex(/^.*$/),
      displayName: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/),
      iconUrl: z.string().min(1).max(2048).regex(/^.*$/),
      id: z.string(),
      inputSchema: z.string().min(1).max(100000).regex(/^.*$/),
      name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      organizationName: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      outputSchema: z.string().min(1).max(100000).regex(/^.*$/),
      priceDescription: z.string().min(1).max(100).regex(/^.*$/),
      readme: z.string().min(1).max(100000).regex(/^.*$/),
    })
    .transform((data) => ({
      description: data['description'],
      display_name: data['displayName'],
      icon_url: data['iconUrl'],
      id: data['id'],
      input_schema: data['inputSchema'],
      name: data['name'],
      organization_name: data['organizationName'],
      output_schema: data['outputSchema'],
      price_description: data['priceDescription'],
      readme: data['readme'],
    }));
});
