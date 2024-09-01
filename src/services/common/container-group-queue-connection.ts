import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupQueueConnection = z.lazy(() => {
  return z.object({
    path: z.string().min(1).max(1024),
    port: z.number().gte(1).lte(65535),
    queueName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
  });
});

/**
 * Represents container group queue connection
 * @typedef  {ContainerGroupQueueConnection} containerGroupQueueConnection - Represents container group queue connection - Represents container group queue connection
 * @property {string}
 * @property {number}
 * @property {string}
 */
export type ContainerGroupQueueConnection = z.infer<typeof containerGroupQueueConnection>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupQueueConnectionResponse = z.lazy(() => {
  return z
    .object({
      path: z.string().min(1).max(1024),
      port: z.number().gte(1).lte(65535),
      queue_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    })
    .transform((data) => ({
      path: data['path'],
      port: data['port'],
      queueName: data['queue_name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupQueueConnectionRequest = z.lazy(() => {
  return z
    .object({ path: z.string().nullish(), port: z.number().nullish(), queueName: z.string().nullish() })
    .transform((data) => ({
      path: data['path'],
      port: data['port'],
      queue_name: data['queueName'],
    }));
});
