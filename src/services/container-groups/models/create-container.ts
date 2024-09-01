import { z } from 'zod';
import {
  containerResourceRequirements,
  containerResourceRequirementsRequest,
  containerResourceRequirementsResponse,
} from '../../common/container-resource-requirements';
import {
  createContainerLogging,
  createContainerLoggingRequest,
  createContainerLoggingResponse,
} from './create-container-logging';
import {
  createContainerRegistryAuthentication,
  createContainerRegistryAuthenticationRequest,
  createContainerRegistryAuthenticationResponse,
} from './create-container-registry-authentication';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createContainer = z.lazy(() => {
  return z.object({
    image: z.string().min(1).max(1024),
    resources: containerResourceRequirements,
    command: z.array(z.string()).max(100).optional().nullable(),
    priority: z.string().optional().nullable(),
    environmentVariables: z.any().optional(),
    logging: createContainerLogging.optional().nullable(),
    registryAuthentication: createContainerRegistryAuthentication.optional().nullable(),
  });
});

/**
 * Represents a container
 * @typedef  {CreateContainer} createContainer - Represents a container - Represents a container
 * @property {string}
 * @property {ContainerResourceRequirements} - Represents a container resource requirements
 * @property {string[]} - Pass a command (and optional arguments) to override the ENTRYPOINT and CMD of a container image.
 * @property {ContainerGroupPriority}
 * @property {any}
 * @property {CreateContainerLogging}
 * @property {CreateContainerRegistryAuthentication}
 */
export type CreateContainer = z.infer<typeof createContainer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createContainerResponse = z.lazy(() => {
  return z
    .object({
      image: z.string().min(1).max(1024),
      resources: containerResourceRequirementsResponse,
      command: z.array(z.string()).max(100).optional().nullable(),
      priority: z.string().optional().nullable(),
      environment_variables: z.any().optional(),
      logging: createContainerLoggingResponse.optional().nullable(),
      registry_authentication: createContainerRegistryAuthenticationResponse.optional().nullable(),
    })
    .transform((data) => ({
      image: data['image'],
      resources: data['resources'],
      command: data['command'],
      priority: data['priority'],
      environmentVariables: data['environment_variables'],
      logging: data['logging'],
      registryAuthentication: data['registry_authentication'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createContainerRequest = z.lazy(() => {
  return z
    .object({
      image: z.string().nullish(),
      resources: containerResourceRequirementsRequest.nullish(),
      command: z.array(z.string()).nullish(),
      priority: z.string().nullish(),
      environmentVariables: z.any().nullish(),
      logging: createContainerLoggingRequest.nullish(),
      registryAuthentication: createContainerRegistryAuthenticationRequest.nullish(),
    })
    .transform((data) => ({
      image: data['image'],
      resources: data['resources'],
      command: data['command'],
      priority: data['priority'],
      environment_variables: data['environmentVariables'],
      logging: data['logging'],
      registry_authentication: data['registryAuthentication'],
    }));
});
