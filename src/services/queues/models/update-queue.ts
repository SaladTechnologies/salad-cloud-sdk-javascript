import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateQueue = z.lazy(() => {
  return z.object({
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
 * Represents a request to update a queue
 * @typedef  {UpdateQueue} updateQueue - Represents a request to update a queue - Represents a request to update a queue
 * @property {string}
 * @property {string} - The description
 */
export type UpdateQueue = z.infer<typeof updateQueue>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateQueueResponse = z.lazy(() => {
  return z
    .object({
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
      displayName: data['display_name'],
      description: data['description'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateQueueRequest = z.lazy(() => {
  return z.object({ displayName: z.string().nullish(), description: z.string().nullish() }).transform((data) => ({
    display_name: data['displayName'],
    description: data['description'],
  }));
});
