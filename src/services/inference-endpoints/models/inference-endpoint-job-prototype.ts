import { z } from 'zod';

/**
 * Zod schema for the InferenceEndpointJobPrototype model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the InferenceEndpointJobPrototype application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the InferenceEndpointJobPrototype application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
