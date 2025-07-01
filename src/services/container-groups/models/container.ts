import { z } from 'zod';
import {
  ContainerLogging,
  containerLogging,
  containerLoggingRequest,
  containerLoggingResponse,
} from './container-logging';
import {
  ContainerResourceRequirements,
  containerResourceRequirements,
  containerResourceRequirementsRequest,
  containerResourceRequirementsResponse,
} from './container-resource-requirements';

/**
 * The shape of the model inside the application code - what the users use
 */
export const container = z.lazy(() => {
  return z.object({
    command: z.array(z.string()).max(100).nullable(),
    environmentVariables: z.any().optional(),
    hash: z
      .string()
      .min(47)
      .max(135)
      .regex(/^sha\d{1,3}:[a-fA-F0-9]{40,135}$/)
      .optional(),
    image: z.string().min(1).max(2048).regex(/^.*$/),
    imageCaching: z.boolean().optional(),
    logging: containerLogging.optional(),
    resources: containerResourceRequirements,
    size: z.number().gte(0).lte(9223372036854776000).optional(),
  });
});

/**
 * Represents a container with its configuration and resource requirements.
 * @typedef  {Container} container - Represents a container with its configuration and resource requirements. - Represents a container with its configuration and resource requirements.
 * @property {string[]} - List of commands to run inside the container. Each command is a string representing a command-line instruction.
 * @property {any} - Environment variables to set in the container.
 * @property {string} - SHA-256 hash (64-character hexadecimal string)
 * @property {string} - The container image.
 * @property {boolean} - The container image caching.
 * @property {ContainerLogging} - Configuration options for directing container logs to a logging provider. This schema enables you to specify a single logging destination for container output, supporting monitoring, debugging, and analytics use cases. Each provider has its own configuration parameters defined in the referenced schemas. Only one logging provider can be selected at a time.
 * @property {ContainerResourceRequirements} - Specifies the resource requirements for a container.
 * @property {number} - Size of the container in bytes.
 */
export type Container = z.infer<typeof container>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerResponse = z.lazy(() => {
  return z
    .object({
      command: z.array(z.string()).max(100).nullable(),
      environment_variables: z.any().optional(),
      hash: z
        .string()
        .min(47)
        .max(135)
        .regex(/^sha\d{1,3}:[a-fA-F0-9]{40,135}$/)
        .optional(),
      image: z.string().min(1).max(2048).regex(/^.*$/),
      image_caching: z.boolean().optional(),
      logging: containerLoggingResponse.optional(),
      resources: containerResourceRequirementsResponse,
      size: z.number().gte(0).lte(9223372036854776000).optional(),
    })
    .transform((data) => ({
      command: data['command'],
      environmentVariables: data['environment_variables'],
      hash: data['hash'],
      image: data['image'],
      imageCaching: data['image_caching'],
      logging: data['logging'],
      resources: data['resources'],
      size: data['size'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerRequest = z.lazy(() => {
  return z
    .object({
      command: z.array(z.string()).max(100).nullable(),
      environmentVariables: z.any().optional(),
      hash: z
        .string()
        .min(47)
        .max(135)
        .regex(/^sha\d{1,3}:[a-fA-F0-9]{40,135}$/)
        .optional(),
      image: z.string().min(1).max(2048).regex(/^.*$/),
      imageCaching: z.boolean().optional(),
      logging: containerLoggingRequest.optional(),
      resources: containerResourceRequirementsRequest,
      size: z.number().gte(0).lte(9223372036854776000).optional(),
    })
    .transform((data) => ({
      command: data['command'],
      environment_variables: data['environmentVariables'],
      hash: data['hash'],
      image: data['image'],
      image_caching: data['imageCaching'],
      logging: data['logging'],
      resources: data['resources'],
      size: data['size'],
    }));
});
