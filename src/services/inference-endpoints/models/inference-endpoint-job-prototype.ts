import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const inferenceEndpointJobPrototype = z.lazy(() => {
  return z.object({
    input: z.any(),
    metadata: z.any().optional(),
    webhook: z.string().min(1).max(2048).optional(),
    webhookUrl: z.string().min(1).max(2048).optional(),
  });
});

/**
 * Represents a request to create a inference endpoint job
 * @typedef  {InferenceEndpointJobPrototype} inferenceEndpointJobPrototype - Represents a request to create a inference endpoint job - Represents a request to create a inference endpoint job
 * @property {any} - The job input. May be any valid JSON.
 * @property {any} - The job metadata. May be any valid JSON.
 * @property {string} - The webhook URL to which the job results will be POSTed.
 * @property {string} - The webhook URL to which the job results will be POSTed.
 */
export type InferenceEndpointJobPrototype = z.infer<typeof inferenceEndpointJobPrototype>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const inferenceEndpointJobPrototypeResponse = z.lazy(() => {
  return z
    .object({
      input: z.any(),
      metadata: z.any().optional(),
      webhook: z.string().min(1).max(2048).optional(),
      webhook_url: z.string().min(1).max(2048).optional(),
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
export const inferenceEndpointJobPrototypeRequest = z.lazy(() => {
  return z
    .object({
      input: z.any(),
      metadata: z.any().optional(),
      webhook: z.string().min(1).max(2048).optional(),
      webhookUrl: z.string().min(1).max(2048).optional(),
    })
    .transform((data) => ({
      input: data['input'],
      metadata: data['metadata'],
      webhook: data['webhook'],
      webhook_url: data['webhookUrl'],
    }));
});
