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
  containerResourceRequirements,
  containerResourceRequirementsRequest,
  containerResourceRequirementsResponse,
} from '../../common/container-resource-requirements';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerConfiguration = z.lazy(() => {
  return z.object({
    command: z.array(z.string()).max(100).optional().nullable(),
    environmentVariables: z.any().optional(),
    image: z.string().min(1).max(2048).regex(/^.*$/),
    imageCaching: z.boolean().optional(),
    logging: containerLoggingConfiguration.optional(),
    priority: z.string().optional().nullable(),
    registryAuthentication: containerRegistryAuthentication.optional(),
    resources: containerResourceRequirements,
  });
});

/**
 * Configuration for creating a container within a container group. Defines the container image, resource requirements, environment variables, and other settings needed to deploy and run the container.
 * @typedef  {ContainerConfiguration} containerConfiguration - Configuration for creating a container within a container group. Defines the container image, resource requirements, environment variables, and other settings needed to deploy and run the container. - Configuration for creating a container within a container group. Defines the container image, resource requirements, environment variables, and other settings needed to deploy and run the container.
 * @property {string[]} - Pass a command (and optional arguments) to override the ENTRYPOINT and CMD of a container image. Each element in the array represents a command segment or argument.
 * @property {any} - Key-value pairs of environment variables to set within the container. These variables will be available to processes running inside the container.
 * @property {string} - The container image.
 * @property {boolean} - The container image caching.
 * @property {ContainerLoggingConfiguration} - Configuration options for directing container logs to a logging provider. This schema enables you to specify a single logging destination for container output, supporting monitoring, debugging, and analytics use cases. Each provider has its own configuration parameters defined in the referenced schemas. Only one logging provider can be selected at a time.
 * @property {ContainerGroupPriority} - Specifies the priority level for container group execution, which determines resource allocation and scheduling precedence.
 * @property {ContainerRegistryAuthentication} - Authentication configuration for various container registry types, including AWS ECR, Docker Hub, GCP GAR, GCP GCR, and basic authentication.
 * @property {ContainerResourceRequirements} - Specifies the resource requirements for a container.
 */
export type ContainerConfiguration = z.infer<typeof containerConfiguration>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerConfigurationResponse = z.lazy(() => {
  return z
    .object({
      command: z.array(z.string()).max(100).optional().nullable(),
      environment_variables: z.any().optional(),
      image: z.string().min(1).max(2048).regex(/^.*$/),
      image_caching: z.boolean().optional(),
      logging: containerLoggingConfigurationResponse.optional(),
      priority: z.string().optional().nullable(),
      registry_authentication: containerRegistryAuthenticationResponse.optional(),
      resources: containerResourceRequirementsResponse,
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
export const containerConfigurationRequest = z.lazy(() => {
  return z
    .object({
      command: z.array(z.string()).nullable().optional(),
      environmentVariables: z.any().optional(),
      image: z.string(),
      imageCaching: z.boolean().optional(),
      logging: containerLoggingConfigurationRequest.optional(),
      priority: z.string().nullable().optional(),
      registryAuthentication: containerRegistryAuthenticationRequest.optional(),
      resources: containerResourceRequirementsRequest,
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
