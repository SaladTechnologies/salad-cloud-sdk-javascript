import { z } from 'zod';
import {
  containerLoggingConfiguration,
  containerLoggingConfigurationRequest,
  containerLoggingConfigurationResponse,
} from '../../common/container-logging-configuration';
import {
  containerRegistryAuthentication,
  containerRegistryAuthenticationRequest,
  containerRegistryAuthenticationResponse,
} from './container-registry-authentication';
import {
  containerResourceUpdateSchema,
  containerResourceUpdateSchemaRequest,
  containerResourceUpdateSchemaResponse,
} from './container-resource-update-schema';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateContainer = z.lazy(() => {
  return z.object({
    command: z.array(z.string()).max(100).optional().nullable(),
    environmentVariables: z.any().optional(),
    image: z.string().min(1).max(1024).regex(/^.*$/).optional().nullable(),
    imageCaching: z.boolean().optional(),
    logging: containerLoggingConfiguration.optional(),
    priority: z.string().optional().nullable(),
    registryAuthentication: containerRegistryAuthentication.optional(),
    resources: containerResourceUpdateSchema.optional().nullable(),
  });
});

/**
 * Represents an update container object
 * @typedef  {UpdateContainer} updateContainer - Represents an update container object - Represents an update container object
 * @property {string[]} - Pass a command (and optional arguments) to override the ENTRYPOINT and CMD of a container image.
 * @property {any} - Environment variables to set in the container.
 * @property {string} - The container image to use.
 * @property {boolean} - The container image caching.
 * @property {ContainerLoggingConfiguration} - Configuration options for directing container logs to a logging provider. This schema enables you to specify a single logging destination for container output, supporting monitoring, debugging, and analytics use cases. Each provider has its own configuration parameters defined in the referenced schemas. Only one logging provider can be selected at a time.
 * @property {ContainerGroupPriority} - Specifies the priority level for container group execution, which determines resource allocation and scheduling precedence.
 * @property {ContainerRegistryAuthentication} - Authentication configuration for various container registry types, including AWS ECR, Docker Hub, GCP GAR, GCP GCR, and basic authentication.
 * @property {ContainerResourceUpdateSchema} - Defines the resource specifications that can be modified for a container group, including CPU, memory, GPU classes, and storage allocations.
 */
export type UpdateContainer = z.infer<typeof updateContainer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateContainerResponse = z.lazy(() => {
  return z
    .object({
      command: z.array(z.string()).max(100).optional().nullable(),
      environment_variables: z.any().optional(),
      image: z.string().min(1).max(1024).regex(/^.*$/).optional().nullable(),
      image_caching: z.boolean().optional(),
      logging: containerLoggingConfigurationResponse.optional(),
      priority: z.string().optional().nullable(),
      registry_authentication: containerRegistryAuthenticationResponse.optional(),
      resources: containerResourceUpdateSchemaResponse.optional().nullable(),
    })
    .transform((data) => ({
      command: data['command'],
      environmentVariables: data['environment_variables'],
      image: data['image'],
      imageCaching: data['image_caching'],
      logging: data['logging'],
      priority: data['priority'],
      registryAuthentication: data['registry_authentication'],
      resources: data['resources'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateContainerRequest = z.lazy(() => {
  return z
    .object({
      command: z.array(z.string()).nullable().optional(),
      environmentVariables: z.any().optional(),
      image: z.string().nullable().optional(),
      imageCaching: z.boolean().optional(),
      logging: containerLoggingConfigurationRequest.optional(),
      priority: z.string().nullable().optional(),
      registryAuthentication: containerRegistryAuthenticationRequest.optional(),
      resources: containerResourceUpdateSchemaRequest.nullable().optional(),
    })
    .transform((data) => ({
      command: data['command'],
      environment_variables: data['environmentVariables'],
      image: data['image'],
      image_caching: data['imageCaching'],
      logging: data['logging'],
      priority: data['priority'],
      registry_authentication: data['registryAuthentication'],
      resources: data['resources'],
    }));
});
