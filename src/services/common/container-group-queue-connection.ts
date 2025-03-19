import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupQueueConnection = z.lazy(() => {
  return z.object({
    path: z.string().min(1).max(1024).regex(/^.*$/),
    port: z.number().gte(1).lte(65535),
    queueName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
  });
});

/**
 * Configuration for connecting a container group to a message queue system, enabling asynchronous communication between services.
 * @typedef  {ContainerGroupQueueConnection} containerGroupQueueConnection - Configuration for connecting a container group to a message queue system, enabling asynchronous communication between services. - Configuration for connecting a container group to a message queue system, enabling asynchronous communication between services.
 * @property {string} - The endpoint path for accessing the queue service, relative to the base URL of the queue server.
 * @property {number} - The network port number used to connect to the queue service. Must be a valid TCP/IP port between 1 and 65535.
 * @property {string} - Unique identifier for the queue. Must start with a lowercase letter, can contain lowercase letters, numbers, and hyphens, and must end with a letter or number.
 */
export type ContainerGroupQueueConnection = z.infer<typeof containerGroupQueueConnection>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupQueueConnectionResponse = z.lazy(() => {
  return z
    .object({
      path: z.string().min(1).max(1024).regex(/^.*$/),
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
  return z.object({ path: z.string(), port: z.number(), queueName: z.string() }).transform((data) => ({
    path: data['path'],
    port: data['port'],
    queue_name: data['queueName'],
  }));
});
