import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const webhookSecretKey = z.lazy(() => {
  return z.object({
    secretKey: z.string(),
  });
});

/**
 * Represents a webhook secret key
 * @typedef  {WebhookSecretKey} webhookSecretKey - Represents a webhook secret key - Represents a webhook secret key
 * @property {string} - The webhook secret key
 */
export type WebhookSecretKey = z.infer<typeof webhookSecretKey>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const webhookSecretKeyResponse = z.lazy(() => {
  return z
    .object({
      secret_key: z.string(),
    })
    .transform((data) => ({
      secretKey: data['secret_key'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const webhookSecretKeyRequest = z.lazy(() => {
  return z.object({ secretKey: z.string().nullish() }).transform((data) => ({
    secret_key: data['secretKey'],
  }));
});
