import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const queuePatch = z.lazy(() => {
  return z.object({
    displayName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ ,-.0-9A-Za-z]+$/)
      .optional()
      .nullable(),
    description: z.string().max(500).regex(/^.*$/).optional().nullable(),
  });
});

/**
 * Represents a request to update an existing queue.
 * @typedef  {QueuePatch} queuePatch - Represents a request to update an existing queue. - Represents a request to update an existing queue.
 * @property {string} - The display name. This may be used as a more human-readable name.
 * @property {string} - The description. This may be used as a space for notes or other information about the queue.
 */
export type QueuePatch = z.infer<typeof queuePatch>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const queuePatchResponse = z.lazy(() => {
  return z
    .object({
      display_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/)
        .optional()
        .nullable(),
      description: z.string().max(500).regex(/^.*$/).optional().nullable(),
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
export const queuePatchRequest = z.lazy(() => {
  return z
    .object({
      displayName: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/)
        .optional()
        .nullable(),
      description: z.string().max(500).regex(/^.*$/).optional().nullable(),
    })
    .transform((data) => ({
      display_name: data['displayName'],
      description: data['description'],
    }));
});
