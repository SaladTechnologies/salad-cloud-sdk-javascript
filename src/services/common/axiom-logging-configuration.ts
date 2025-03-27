import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const axiomLoggingConfiguration = z.lazy(() => {
  return z.object({
    host: z.string().min(1).max(1000).regex(/^.*$/),
    apiToken: z.string().min(1).max(1000).regex(/^.*$/),
    dataset: z.string().min(1).max(1000).regex(/^.*$/),
  });
});

/**
 * Configuration settings for integrating container logs with the Axiom logging service. When specified, container logs will be forwarded to the Axiom instance defined by these parameters.
 * @typedef  {AxiomLoggingConfiguration} axiomLoggingConfiguration - Configuration settings for integrating container logs with the Axiom logging service. When specified, container logs will be forwarded to the Axiom instance defined by these parameters. - Configuration settings for integrating container logs with the Axiom logging service. When specified, container logs will be forwarded to the Axiom instance defined by these parameters.
 * @property {string} - The Axiom host URL where logs will be sent (e.g. logs.axiom.co)
 * @property {string} - Authentication token for the Axiom API with appropriate write permissions
 * @property {string} - Name of the Axiom dataset where the container logs will be stored and indexed
 */
export type AxiomLoggingConfiguration = z.infer<typeof axiomLoggingConfiguration>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const axiomLoggingConfigurationResponse = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000).regex(/^.*$/),
      api_token: z.string().min(1).max(1000).regex(/^.*$/),
      dataset: z.string().min(1).max(1000).regex(/^.*$/),
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
export const axiomLoggingConfigurationRequest = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000).regex(/^.*$/),
      apiToken: z.string().min(1).max(1000).regex(/^.*$/),
      dataset: z.string().min(1).max(1000).regex(/^.*$/),
    })
    .transform((data) => ({
      host: data['host'],
      api_token: data['apiToken'],
      dataset: data['dataset'],
    }));
});
