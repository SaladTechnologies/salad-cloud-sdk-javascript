import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const inferenceEndpoint = z.lazy(() => {
  return z.object({
    id: z.string(),
    name: z.string(),
    displayName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ ,-.0-9A-Za-z]+$/),
    description: z.string(),
    endpointUrl: z.string(),
    readme: z.string(),
    priceDescription: z.string(),
    iconImage: z.string(),
  });
});

/**
 * Represents an inference endpoint
 * @typedef  {InferenceEndpoint} inferenceEndpoint - Represents an inference endpoint - Represents an inference endpoint
 * @property {string} - The unique identifier
 * @property {string} - The inference endpoint name
 * @property {string} - The inference endpoint display name
 * @property {string} - a brief description of the inference endpoint
 * @property {string} - The URL of the inference endpoint
 * @property {string} - A markdown file containing a detailed description of the inference endpoint
 * @property {string} - A description of the price
 * @property {string} - The URL of the icon image
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
      name: z.string(),
      display_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/),
      description: z.string(),
      endpoint_url: z.string(),
      readme: z.string(),
      price_description: z.string(),
      icon_image: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      displayName: data['display_name'],
      description: data['description'],
      endpointUrl: data['endpoint_url'],
      readme: data['readme'],
      priceDescription: data['price_description'],
      iconImage: data['icon_image'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const inferenceEndpointRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      name: z.string().nullish(),
      displayName: z.string().nullish(),
      description: z.string().nullish(),
      endpointUrl: z.string().nullish(),
      readme: z.string().nullish(),
      priceDescription: z.string().nullish(),
      iconImage: z.string().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      display_name: data['displayName'],
      description: data['description'],
      endpoint_url: data['endpointUrl'],
      readme: data['readme'],
      price_description: data['priceDescription'],
      icon_image: data['iconImage'],
    }));
});
