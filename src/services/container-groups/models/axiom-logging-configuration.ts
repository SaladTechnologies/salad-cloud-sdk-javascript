import { z } from 'zod';

/**
 * Zod schema for the AxiomLoggingConfiguration model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const axiomLoggingConfiguration = z.lazy(() => {
  return z.object({
    apiToken: z.string().min(1).max(1000).regex(/^.*$/),
    dataset: z.string().min(1).max(1000).regex(/^.*$/),
    host: z.string().min(1).max(1000).regex(/^.*$/),
  });
});

/**
 * Configuration settings for integrating container logs with the Axiom logging service. When specified, container logs will be forwarded to the Axiom instance defined by these parameters.
 * @typedef  {AxiomLoggingConfiguration} axiomLoggingConfiguration - Configuration settings for integrating container logs with the Axiom logging service. When specified, container logs will be forwarded to the Axiom instance defined by these parameters. - Configuration settings for integrating container logs with the Axiom logging service. When specified, container logs will be forwarded to the Axiom instance defined by these parameters.
 * @property {string} - Authentication token for the Axiom API with appropriate write permissions
 * @property {string} - Name of the Axiom dataset where the container logs will be stored and indexed
 * @property {string} - The Axiom host URL where logs will be sent (e.g. logs.axiom.co)
 */
export type AxiomLoggingConfiguration = z.infer<typeof axiomLoggingConfiguration>;

/**
 * Zod schema for mapping API responses to the AxiomLoggingConfiguration application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const axiomLoggingConfigurationResponse = z.lazy(() => {
  return z
    .object({
      api_token: z.string().min(1).max(1000).regex(/^.*$/),
      dataset: z.string().min(1).max(1000).regex(/^.*$/),
      host: z.string().min(1).max(1000).regex(/^.*$/),
    })
    .transform((data) => ({
      apiToken: data['api_token'],
      dataset: data['dataset'],
      host: data['host'],
    }));
});

/**
 * Zod schema for mapping the AxiomLoggingConfiguration application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const axiomLoggingConfigurationRequest = z.lazy(() => {
  return z
    .object({
      apiToken: z.string().min(1).max(1000).regex(/^.*$/),
      dataset: z.string().min(1).max(1000).regex(/^.*$/),
      host: z.string().min(1).max(1000).regex(/^.*$/),
    })
    .transform((data) => ({
      api_token: data['apiToken'],
      dataset: data['dataset'],
      host: data['host'],
    }));
});
