import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupProbeTcp = z.lazy(() => {
  return z.object({
    port: z.number().gte(0).lte(65536),
  });
});

/**
 *
 * @typedef  {ContainerGroupProbeTcp} containerGroupProbeTcp
 * @property {number}
 */
export type ContainerGroupProbeTcp = z.infer<typeof containerGroupProbeTcp>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupProbeTcpResponse = z.lazy(() => {
  return z
    .object({
      port: z.number().gte(0).lte(65536),
    })
    .transform((data) => ({
      port: data['port'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupProbeTcpRequest = z.lazy(() => {
  return z.object({ port: z.number().nullish() }).transform((data) => ({
    port: data['port'],
  }));
});
