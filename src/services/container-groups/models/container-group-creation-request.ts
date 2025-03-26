import { z } from 'zod';
import {
  ContainerConfiguration,
  containerConfiguration,
  containerConfigurationRequest,
  containerConfigurationResponse,
} from './container-configuration';
import {
  ContainerGroupLivenessProbe,
  containerGroupLivenessProbe,
  containerGroupLivenessProbeRequest,
  containerGroupLivenessProbeResponse,
} from '../../common/container-group-liveness-probe';
import {
  CreateContainerGroupNetworking,
  createContainerGroupNetworking,
  createContainerGroupNetworkingRequest,
  createContainerGroupNetworkingResponse,
} from './create-container-group-networking';
import {
  QueueBasedAutoscalerConfiguration,
  queueBasedAutoscalerConfiguration,
  queueBasedAutoscalerConfigurationRequest,
  queueBasedAutoscalerConfigurationResponse,
} from '../../common/queue-based-autoscaler-configuration';
import {
  ContainerGroupQueueConnection,
  containerGroupQueueConnection,
  containerGroupQueueConnectionRequest,
  containerGroupQueueConnectionResponse,
} from '../../common/container-group-queue-connection';
import {
  ContainerGroupReadinessProbe,
  containerGroupReadinessProbe,
  containerGroupReadinessProbeRequest,
  containerGroupReadinessProbeResponse,
} from '../../common/container-group-readiness-probe';
import {
  ContainerGroupStartupProbe,
  containerGroupStartupProbe,
  containerGroupStartupProbeRequest,
  containerGroupStartupProbeResponse,
} from '../../common/container-group-startup-probe';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupCreationRequest = z.lazy(() => {
  return z.object({
    autostartPolicy: z.boolean(),
    container: containerConfiguration,
    countryCodes: z.array(z.string()).min(1).max(500).optional(),
    displayName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ ,-.0-9A-Za-z]+$/)
      .optional(),
    livenessProbe: containerGroupLivenessProbe.optional().nullable(),
    name: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    networking: createContainerGroupNetworking.optional(),
    queueAutoscaler: queueBasedAutoscalerConfiguration.optional(),
    queueConnection: containerGroupQueueConnection.optional(),
    readinessProbe: containerGroupReadinessProbe.optional().nullable(),
    replicas: z.number().gte(0).lte(500),
    restartPolicy: z.string(),
    startupProbe: containerGroupStartupProbe.optional().nullable(),
  });
});

/**
 * Represents a request to create a container group, which manages a collection of container instances with shared configuration and scaling policies
 * @typedef  {ContainerGroupCreationRequest} containerGroupCreationRequest - Represents a request to create a container group, which manages a collection of container instances with shared configuration and scaling policies - Represents a request to create a container group, which manages a collection of container instances with shared configuration and scaling policies
 * @property {boolean} - Determines whether the container group should start automatically when created (true) or remain stopped until manually started (false)
 * @property {ContainerConfiguration} - Configuration for creating a container within a container group. Defines the container image, resource requirements, environment variables, and other settings needed to deploy and run the container.
 * @property {CountryCode[]} - List of countries nodes must be located in. Remove this field to permit nodes from any country.
 * @property {string} - Human-readable name for the container group that can include spaces and special characters, used for display purposes
 * @property {ContainerGroupLivenessProbe} - Defines a liveness probe for container groups that determines when to restart a container if it becomes unhealthy
 * @property {string} - Unique identifier for the container group that must follow DNS naming conventions (lowercase alphanumeric with hyphens)
 * @property {CreateContainerGroupNetworking} - Network configuration for container groups specifying connectivity parameters, including authentication, protocol, and timeout settings
 * @property {QueueBasedAutoscalerConfiguration} - Defines configuration for automatically scaling container instances based on queue length. The autoscaler monitors a queue and adjusts the number of running replicas to maintain the desired queue length.
 * @property {ContainerGroupQueueConnection} - Configuration for connecting a container group to a message queue system, enabling asynchronous communication between services.
 * @property {ContainerGroupReadinessProbe} - Defines how to check if a container is ready to serve traffic. The readiness probe determines whether the container's application is ready to accept traffic. If the readiness probe fails, the container is considered not ready and traffic will not be sent to it.
 * @property {number} - Number of container instances to deploy and maintain for this container group
 * @property {ContainerRestartPolicy} - Specifies the policy for restarting containers when they exit or fail.
 * @property {ContainerGroupStartupProbe} - Defines a probe that checks if a container application has started successfully. Startup probes help prevent applications from being prematurely marked as unhealthy during initialization. The probe can use HTTP requests, TCP connections, gRPC calls, or shell commands to determine startup status.
 */
export type ContainerGroupCreationRequest = z.infer<typeof containerGroupCreationRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupCreationRequestResponse = z.lazy(() => {
  return z
    .object({
      autostart_policy: z.boolean(),
      container: containerConfigurationResponse,
      country_codes: z.array(z.string()).min(1).max(500).optional(),
      display_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/)
        .optional(),
      liveness_probe: containerGroupLivenessProbeResponse.optional().nullable(),
      name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      networking: createContainerGroupNetworkingResponse.optional(),
      queue_autoscaler: queueBasedAutoscalerConfigurationResponse.optional(),
      queue_connection: containerGroupQueueConnectionResponse.optional(),
      readiness_probe: containerGroupReadinessProbeResponse.optional().nullable(),
      replicas: z.number().gte(0).lte(500),
      restart_policy: z.string(),
      startup_probe: containerGroupStartupProbeResponse.optional().nullable(),
    })
    .transform((data) => ({
      autostartPolicy: data['autostart_policy'],
      container: data['container'],
      countryCodes: data['country_codes'],
      displayName: data['display_name'],
      livenessProbe: data['liveness_probe'],
      name: data['name'],
      networking: data['networking'],
      queueAutoscaler: data['queue_autoscaler'],
      queueConnection: data['queue_connection'],
      readinessProbe: data['readiness_probe'],
      replicas: data['replicas'],
      restartPolicy: data['restart_policy'],
      startupProbe: data['startup_probe'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupCreationRequestRequest = z.lazy(() => {
  return z
    .object({
      autostartPolicy: z.boolean(),
      container: containerConfigurationRequest,
      countryCodes: z.array(z.string()).optional(),
      displayName: z.string().optional(),
      livenessProbe: containerGroupLivenessProbeRequest.nullable().optional(),
      name: z.string(),
      networking: createContainerGroupNetworkingRequest.optional(),
      queueAutoscaler: queueBasedAutoscalerConfigurationRequest.optional(),
      queueConnection: containerGroupQueueConnectionRequest.optional(),
      readinessProbe: containerGroupReadinessProbeRequest.nullable().optional(),
      replicas: z.number(),
      restartPolicy: z.string(),
      startupProbe: containerGroupStartupProbeRequest.nullable().optional(),
    })
    .transform((data) => ({
      autostart_policy: data['autostartPolicy'],
      container: data['container'],
      country_codes: data['countryCodes'],
      display_name: data['displayName'],
      liveness_probe: data['livenessProbe'],
      name: data['name'],
      networking: data['networking'],
      queue_autoscaler: data['queueAutoscaler'],
      queue_connection: data['queueConnection'],
      readiness_probe: data['readinessProbe'],
      replicas: data['replicas'],
      restart_policy: data['restartPolicy'],
      startup_probe: data['startupProbe'],
    }));
});
