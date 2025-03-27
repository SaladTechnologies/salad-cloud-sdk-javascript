import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const queuePrototype = z.lazy(() => {
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
      .optional(),
    description: z.string().max(500).regex(/^.*$/).optional(),
  });
});

/**
 * Represents a request to create a new queue.
 * @typedef  {QueuePrototype} queuePrototype - Represents a request to create a new queue. - Represents a request to create a new queue.
 * @property {string} - The queue name. This must be unique within the project.
 * @property {string} - The display name. This may be used as a more human-readable name.
 * @property {string} - The description. This may be used as a space for notes or other information about the queue.
 */
export type QueuePrototype = z.infer<typeof queuePrototype>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const queuePrototypeResponse = z.lazy(() => {
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
        .optional(),
      description: z.string().max(500).regex(/^.*$/).optional(),
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
export const queuePrototypeRequest = z.lazy(() => {
  return z
    .object({
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
        .optional(),
      description: z.string().max(500).regex(/^.*$/).optional(),
    })
    .transform((data) => ({
      name: data['name'],
      display_name: data['displayName'],
      description: data['description'],
    }));
});
