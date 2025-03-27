import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupProbeExec = z.lazy(() => {
  return z.object({
    command: z.array(z.string()).min(1).max(100),
  });
});

/**
 * Defines the exec action for a probe in a container group. This is used to execute a command inside a container for health checks.
 * @typedef  {ContainerGroupProbeExec} containerGroupProbeExec - Defines the exec action for a probe in a container group. This is used to execute a command inside a container for health checks. - Defines the exec action for a probe in a container group. This is used to execute a command inside a container for health checks.
 * @property {string[]} - The command to execute inside the container. Exit status of 0 is considered successful, any other exit status is considered failure.
 */
export type ContainerGroupProbeExec = z.infer<typeof containerGroupProbeExec>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupProbeExecResponse = z.lazy(() => {
  return z
    .object({
      command: z.array(z.string()).min(1).max(100),
    })
    .transform((data) => ({
      command: data['command'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupProbeExecRequest = z.lazy(() => {
  return z
    .object({
      command: z.array(z.string()).min(1).max(100),
    })
    .transform((data) => ({
      command: data['command'],
    }));
});
