import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createInferenceEndpointJob1 = z.lazy(() => {
  return z.object({
    input: z.any(),
    metadata: z.any().optional(),
    webhook: z.string().max(2048).optional(),
    webhookUrl: z.string().max(2048).optional(),
  });
});

/**
 * Represents a request to create a inference endpoint job
 * @typedef  {CreateInferenceEndpointJob1} createInferenceEndpointJob1 - Represents a request to create a inference endpoint job - Represents a request to create a inference endpoint job
 * @property {any} - The job input. May be any valid JSON.
 * @property {any}
 * @property {string}
 * @property {string}
 */
export type CreateInferenceEndpointJob1 = z.infer<typeof createInferenceEndpointJob1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createInferenceEndpointJob1Response = z.lazy(() => {
  return z
    .object({
      input: z.any(),
      metadata: z.any().optional(),
      webhook: z.string().max(2048).optional(),
      webhook_url: z.string().max(2048).optional(),
    })
    .transform((data) => ({
      input: data['input'],
      metadata: data['metadata'],
      webhook: data['webhook'],
      webhookUrl: data['webhook_url'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createInferenceEndpointJob1Request = z.lazy(() => {
  return z
    .object({
      input: z.any().nullish(),
      metadata: z.any().nullish(),
      webhook: z.string().nullish(),
      webhookUrl: z.string().nullish(),
    })
    .transform((data) => ({
      input: data['input'],
      metadata: data['metadata'],
      webhook: data['webhook'],
      webhook_url: data['webhookUrl'],
    }));
});
