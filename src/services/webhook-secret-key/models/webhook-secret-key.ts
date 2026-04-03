import { z } from 'zod';

/**
 * Zod schema for the WebhookSecretKey model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const webhookSecretKey = z.lazy(() => {
  return z.object({
    secretKey: z
      .string()
      .min(44)
      .max(172)
      .regex(/^[+\/=0-9A-Za-z]{44,172}$/),
  });
});

/**
 * Represents a webhook secret key
 * @typedef  {WebhookSecretKey} webhookSecretKey - Represents a webhook secret key - Represents a webhook secret key
 * @property {string} - The webhook secret key
 */
export type WebhookSecretKey = z.infer<typeof webhookSecretKey>;

/**
 * Zod schema for mapping API responses to the WebhookSecretKey application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const webhookSecretKeyResponse = z.lazy(() => {
  return z
    .object({
      secret_key: z
        .string()
        .min(44)
        .max(172)
        .regex(/^[+\/=0-9A-Za-z]{44,172}$/),
    })
    .transform((data) => ({
      secretKey: data['secret_key'],
    }));
});

/**
 * Zod schema for mapping the WebhookSecretKey application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const webhookSecretKeyRequest = z.lazy(() => {
  return z
    .object({
      secretKey: z
        .string()
        .min(44)
        .max(172)
        .regex(/^[+\/=0-9A-Za-z]{44,172}$/),
    })
    .transform((data) => ({
      secret_key: data['secretKey'],
    }));
});
