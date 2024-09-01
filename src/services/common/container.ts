import { z } from 'zod';
import {
  containerResourceRequirements,
  containerResourceRequirementsRequest,
  containerResourceRequirementsResponse,
} from './container-resource-requirements';
import { containerLogging, containerLoggingRequest, containerLoggingResponse } from './container-logging';

/**
 * The shape of the model inside the application code - what the users use
 */
export const container = z.lazy(() => {
  return z.object({
    image: z.string().min(1).max(1024),
    resources: containerResourceRequirements,
    command: z.array(z.string()).max(100),
    priority: z.string().optional().nullable(),
    size: z.number().optional(),
    hash: z.string().optional(),
    environmentVariables: z.any().optional(),
    logging: containerLogging.optional().nullable(),
  });
});

/**
 * Represents a container
 * @typedef  {Container} container - Represents a container - Represents a container
 * @property {string}
 * @property {ContainerResourceRequirements} - Represents a container resource requirements
 * @property {string[]}
 * @property {ContainerGroupPriority}
 * @property {number}
 * @property {string}
 * @property {any}
 * @property {ContainerLogging}
 */
export type Container = z.infer<typeof container>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerResponse = z.lazy(() => {
  return z
    .object({
      image: z.string().min(1).max(1024),
      resources: containerResourceRequirementsResponse,
      command: z.array(z.string()).max(100),
      priority: z.string().optional().nullable(),
      size: z.number().optional(),
      hash: z.string().optional(),
      environment_variables: z.any().optional(),
      logging: containerLoggingResponse.optional().nullable(),
    })
    .transform((data) => ({
      image: data['image'],
      resources: data['resources'],
      command: data['command'],
      priority: data['priority'],
      size: data['size'],
      hash: data['hash'],
      environmentVariables: data['environment_variables'],
      logging: data['logging'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerRequest = z.lazy(() => {
  return z
    .object({
      image: z.string().nullish(),
      resources: containerResourceRequirementsRequest.nullish(),
      command: z.array(z.string()).nullish(),
      priority: z.string().nullish(),
      size: z.number().nullish(),
      hash: z.string().nullish(),
      environmentVariables: z.any().nullish(),
      logging: containerLoggingRequest.nullish(),
    })
    .transform((data) => ({
      image: data['image'],
      resources: data['resources'],
      command: data['command'],
      priority: data['priority'],
      size: data['size'],
      hash: data['hash'],
      environment_variables: data['environmentVariables'],
      logging: data['logging'],
    }));
});
