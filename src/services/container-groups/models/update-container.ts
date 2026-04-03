import { z } from 'zod';
import {
  UpdateContainerLogging,
  updateContainerLogging,
  updateContainerLoggingRequest,
  updateContainerLoggingResponse,
} from './update-container-logging';
import {
  ContainerRegistryAuthentication,
  containerRegistryAuthentication,
  containerRegistryAuthenticationRequest,
  containerRegistryAuthenticationResponse,
} from './container-registry-authentication';
import {
  ContainerResourceUpdateSchema,
  containerResourceUpdateSchema,
  containerResourceUpdateSchemaRequest,
  containerResourceUpdateSchemaResponse,
} from './container-resource-update-schema';

/**
 * Zod schema for the UpdateContainer model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateContainer = z.lazy(() => {
  return z.object({
    command: z.array(z.string()).max(100).optional().nullable(),
    environmentVariables: z.any().optional(),
    image: z.string().min(1).max(1024).regex(/^.*$/).optional().nullable(),
    imageCaching: z.boolean().optional(),
    logging: updateContainerLogging.optional().nullable(),
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
 * @property {UpdateContainerLogging} - Configuration options for directing container logs to a logging provider. This schema enables you to specify a single logging destination for container output, supporting monitoring, debugging, and analytics use cases. Each provider has its own configuration parameters defined in the referenced schemas. Only one logging provider can be selected at a time.
 * @property {ContainerGroupPriority} - Specifies the priority level for container group execution, which determines resource allocation and scheduling precedence.
 * @property {ContainerRegistryAuthentication} - Authentication configuration for various container registry types, including AWS ECR, Docker Hub, GCP GAR, GCP GCR, and basic authentication.
 * @property {ContainerResourceUpdateSchema} - Defines the resource specifications that can be modified for a container group, including CPU, memory, GPU classes, and storage allocations.
 */
export type UpdateContainer = z.infer<typeof updateContainer>;

/**
 * Zod schema for mapping API responses to the UpdateContainer application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateContainerResponse = z.lazy(() => {
  return z
    .object({
      command: z.array(z.string()).max(100).optional().nullable(),
      environment_variables: z.any().optional(),
      image: z.string().min(1).max(1024).regex(/^.*$/).optional().nullable(),
      image_caching: z.boolean().optional(),
      logging: updateContainerLoggingResponse.optional().nullable(),
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
 * Zod schema for mapping the UpdateContainer application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateContainerRequest = z.lazy(() => {
  return z
    .object({
      command: z.array(z.string()).max(100).optional().nullable(),
      environmentVariables: z.any().optional(),
      image: z.string().min(1).max(1024).regex(/^.*$/).optional().nullable(),
      imageCaching: z.boolean().optional(),
      logging: updateContainerLoggingRequest.optional().nullable(),
      priority: z.string().optional().nullable(),
      registryAuthentication: containerRegistryAuthenticationRequest.optional(),
      resources: containerResourceUpdateSchemaRequest.optional().nullable(),
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
