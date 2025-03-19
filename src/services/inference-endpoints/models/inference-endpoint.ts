import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const inferenceEndpoint = z.lazy(() => {
  return z.object({
    id: z.string(),
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
    displayName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ ,-.0-9A-Za-z]+$/),
    description: z.string().max(1000).regex(/^.*$/),
    readme: z.string().min(1).max(100000).regex(/^.*$/),
    priceDescription: z.string().min(1).max(100).regex(/^.*$/),
    iconUrl: z.string().min(1).max(2048).regex(/^.*$/),
    inputSchema: z.string().min(1).max(100000).regex(/^.*$/),
    outputSchema: z.string().min(1).max(100000).regex(/^.*$/),
  });
});

/**
 * Represents an inference endpoint
 * @typedef  {InferenceEndpoint} inferenceEndpoint - Represents an inference endpoint - Represents an inference endpoint
 * @property {string} - The inference endpoint identifier.
 * @property {string} - The inference endpoint name.
 * @property {string} - The organization name.
 * @property {string} - The display-friendly name of the resource.
 * @property {string} - The detailed description of the resource.
 * @property {string} - A markdown file containing a detailed description of the inference endpoint
 * @property {string} - A description of the price
 * @property {string} - The URL of the icon image
 * @property {string} - The input schema
 * @property {string} - The output schema
 */
export type InferenceEndpoint = z.infer<typeof inferenceEndpoint>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const inferenceEndpointResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
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
      display_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/),
      description: z.string().max(1000).regex(/^.*$/),
      readme: z.string().min(1).max(100000).regex(/^.*$/),
      price_description: z.string().min(1).max(100).regex(/^.*$/),
      icon_url: z.string().min(1).max(2048).regex(/^.*$/),
      input_schema: z.string().min(1).max(100000).regex(/^.*$/),
      output_schema: z.string().min(1).max(100000).regex(/^.*$/),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      organizationName: data['organization_name'],
      displayName: data['display_name'],
      description: data['description'],
      readme: data['readme'],
      priceDescription: data['price_description'],
      iconUrl: data['icon_url'],
      inputSchema: data['input_schema'],
      outputSchema: data['output_schema'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const inferenceEndpointRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string(),
      organizationName: z.string(),
      displayName: z.string(),
      description: z.string(),
      readme: z.string(),
      priceDescription: z.string(),
      iconUrl: z.string(),
      inputSchema: z.string(),
      outputSchema: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      organization_name: data['organizationName'],
      display_name: data['displayName'],
      description: data['description'],
      readme: data['readme'],
      price_description: data['priceDescription'],
      icon_url: data['iconUrl'],
      input_schema: data['inputSchema'],
      output_schema: data['outputSchema'],
    }));
});
