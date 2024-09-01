import { z } from 'zod';
import { resources, resourcesRequest, resourcesResponse } from './resources';
import {
  updateContainerLogging,
  updateContainerLoggingRequest,
  updateContainerLoggingResponse,
} from './update-container-logging';
import {
  updateContainerRegistryAuthentication,
  updateContainerRegistryAuthenticationRequest,
  updateContainerRegistryAuthenticationResponse,
} from './update-container-registry-authentication';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateContainer = z.lazy(() => {
  return z.object({
    image: z.string().min(1).max(1024).optional().nullable(),
    resources: resources.optional().nullable(),
    command: z.array(z.string()).max(100).optional().nullable(),
    priority: z.string().optional().nullable(),
    environmentVariables: z.any().optional(),
    logging: updateContainerLogging.optional().nullable(),
    registryAuthentication: updateContainerRegistryAuthentication.optional().nullable(),
  });
});

/**
 * Represents an update container object
 * @typedef  {UpdateContainer} updateContainer - Represents an update container object - Represents an update container object
 * @property {string}
 * @property {Resources}
 * @property {string[]} - Pass a command (and optional arguments) to override the ENTRYPOINT and CMD of a container image.
 * @property {ContainerGroupPriority}
 * @property {any}
 * @property {UpdateContainerLogging}
 * @property {UpdateContainerRegistryAuthentication}
 */
export type UpdateContainer = z.infer<typeof updateContainer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateContainerResponse = z.lazy(() => {
  return z
    .object({
      image: z.string().min(1).max(1024).optional().nullable(),
      resources: resourcesResponse.optional().nullable(),
      command: z.array(z.string()).max(100).optional().nullable(),
      priority: z.string().optional().nullable(),
      environment_variables: z.any().optional(),
      logging: updateContainerLoggingResponse.optional().nullable(),
      registry_authentication: updateContainerRegistryAuthenticationResponse.optional().nullable(),
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
export const updateContainerRequest = z.lazy(() => {
  return z
    .object({
      image: z.string().nullish(),
      resources: resourcesRequest.nullish(),
      command: z.array(z.string()).nullish(),
      priority: z.string().nullish(),
      environmentVariables: z.any().nullish(),
      logging: updateContainerLoggingRequest.nullish(),
      registryAuthentication: updateContainerRegistryAuthenticationRequest.nullish(),
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
