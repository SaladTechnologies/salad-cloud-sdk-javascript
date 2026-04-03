import { z } from 'zod';

/**
 * Zod schema for the QueuePatch model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const queuePatch = z.lazy(() => {
  return z.object({
    description: z.string().max(500).regex(/^.*$/).optional().nullable(),
    displayName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ ,-.0-9A-Za-z]+$/)
      .optional()
      .nullable(),
  });
});

/**
 * Represents a request to update an existing queue.
 * @typedef  {QueuePatch} queuePatch - Represents a request to update an existing queue. - Represents a request to update an existing queue.
 * @property {string} - The description. This may be used as a space for notes or other information about the queue.
 * @property {string} - The display name. This may be used as a more human-readable name.
 */
export type QueuePatch = z.infer<typeof queuePatch>;

/**
 * Zod schema for mapping API responses to the QueuePatch application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const queuePatchResponse = z.lazy(() => {
  return z
    .object({
      description: z.string().max(500).regex(/^.*$/).optional().nullable(),
      display_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/)
        .optional()
        .nullable(),
    })
    .transform((data) => ({
      description: data['description'],
      displayName: data['display_name'],
    }));
});

/**
 * Zod schema for mapping the QueuePatch application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const queuePatchRequest = z.lazy(() => {
  return z
    .object({
      description: z.string().max(500).regex(/^.*$/).optional().nullable(),
      displayName: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/)
        .optional()
        .nullable(),
    })
    .transform((data) => ({
      description: data['description'],
      display_name: data['displayName'],
    }));
});
