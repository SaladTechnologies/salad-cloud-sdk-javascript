import { z } from 'zod';

/**
 * Zod schema for the QueuePrototype model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const queuePrototype = z.lazy(() => {
  return z.object({
    description: z.string().max(500).regex(/^.*$/).optional(),
    displayName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ ,-.0-9A-Za-z]+$/)
      .optional(),
    name: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
  });
});

/**
 * Represents a request to create a new queue.
 * @typedef  {QueuePrototype} queuePrototype - Represents a request to create a new queue. - Represents a request to create a new queue.
 * @property {string} - The description. This may be used as a space for notes or other information about the queue.
 * @property {string} - The display name. This may be used as a more human-readable name.
 * @property {string} - The queue name. This must be unique within the project.
 */
export type QueuePrototype = z.infer<typeof queuePrototype>;

/**
 * Zod schema for mapping API responses to the QueuePrototype application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const queuePrototypeResponse = z.lazy(() => {
  return z
    .object({
      description: z.string().max(500).regex(/^.*$/).optional(),
      display_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/)
        .optional(),
      name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    })
    .transform((data) => ({
      description: data['description'],
      displayName: data['display_name'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the QueuePrototype application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const queuePrototypeRequest = z.lazy(() => {
  return z
    .object({
      description: z.string().max(500).regex(/^.*$/).optional(),
      displayName: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/)
        .optional(),
      name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    })
    .transform((data) => ({
      description: data['description'],
      display_name: data['displayName'],
      name: data['name'],
    }));
});
