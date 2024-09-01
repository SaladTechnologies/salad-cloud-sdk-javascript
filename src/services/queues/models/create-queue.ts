import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createQueue = z.lazy(() => {
  return z.object({
    name: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    displayName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ ,-.0-9A-Za-z]+$/)
      .optional()
      .nullable(),
    description: z.string().max(500).optional().nullable(),
  });
});

/**
 * Represents a request to create a queue
 * @typedef  {CreateQueue} createQueue - Represents a request to create a queue - Represents a request to create a queue
 * @property {string}
 * @property {string}
 * @property {string} - The description
 */
export type CreateQueue = z.infer<typeof createQueue>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createQueueResponse = z.lazy(() => {
  return z
    .object({
      name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      display_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/)
        .optional()
        .nullable(),
      description: z.string().max(500).optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      displayName: data['display_name'],
      description: data['description'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createQueueRequest = z.lazy(() => {
  return z
    .object({ name: z.string().nullish(), displayName: z.string().nullish(), description: z.string().nullish() })
    .transform((data) => ({
      name: data['name'],
      display_name: data['displayName'],
      description: data['description'],
    }));
});
