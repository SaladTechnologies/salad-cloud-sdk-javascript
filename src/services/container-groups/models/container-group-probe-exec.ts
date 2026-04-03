import { z } from 'zod';

/**
 * Zod schema for the ContainerGroupProbeExec model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the ContainerGroupProbeExec application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the ContainerGroupProbeExec application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
