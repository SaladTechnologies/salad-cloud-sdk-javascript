import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupProbeExec = z.lazy(() => {
  return z.object({
    command: z.array(z.string()),
  });
});

/**
 *
 * @typedef  {ContainerGroupProbeExec} containerGroupProbeExec
 * @property {string[]}
 */
export type ContainerGroupProbeExec = z.infer<typeof containerGroupProbeExec>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupProbeExecResponse = z.lazy(() => {
  return z
    .object({
      command: z.array(z.string()),
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
  return z.object({ command: z.array(z.string()).nullish() }).transform((data) => ({
    command: data['command'],
  }));
});
