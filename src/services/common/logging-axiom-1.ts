import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loggingAxiom1 = z.lazy(() => {
  return z.object({
    host: z.string().min(1).max(1000),
    apiToken: z.string().min(1).max(1000),
    dataset: z.string().min(1).max(1000),
  });
});

/**
 *
 * @typedef  {LoggingAxiom1} loggingAxiom1
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type LoggingAxiom1 = z.infer<typeof loggingAxiom1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loggingAxiom1Response = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000),
      api_token: z.string().min(1).max(1000),
      dataset: z.string().min(1).max(1000),
    })
    .transform((data) => ({
      host: data['host'],
      apiToken: data['api_token'],
      dataset: data['dataset'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loggingAxiom1Request = z.lazy(() => {
  return z
    .object({ host: z.string().nullish(), apiToken: z.string().nullish(), dataset: z.string().nullish() })
    .transform((data) => ({
      host: data['host'],
      api_token: data['apiToken'],
      dataset: data['dataset'],
    }));
});