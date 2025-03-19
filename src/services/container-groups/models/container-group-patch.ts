import { z } from 'zod';
import { updateContainer, updateContainerRequest, updateContainerResponse } from './update-container';
import {
  updateContainerGroupNetworking,
  updateContainerGroupNetworkingRequest,
  updateContainerGroupNetworkingResponse,
} from './update-container-group-networking';
import {
  containerGroupLivenessProbe,
  containerGroupLivenessProbeRequest,
  containerGroupLivenessProbeResponse,
} from '../../common/container-group-liveness-probe';
import {
  containerGroupReadinessProbe,
  containerGroupReadinessProbeRequest,
  containerGroupReadinessProbeResponse,
} from '../../common/container-group-readiness-probe';
import {
  containerGroupStartupProbe,
  containerGroupStartupProbeRequest,
  containerGroupStartupProbeResponse,
} from '../../common/container-group-startup-probe';
import {
  queueBasedAutoscalerConfiguration,
  queueBasedAutoscalerConfigurationRequest,
  queueBasedAutoscalerConfigurationResponse,
} from '../../common/queue-based-autoscaler-configuration';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupPatch = z.lazy(() => {
  return z.object({
    displayName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ ,-.0-9A-Za-z]+$/)
      .optional()
      .nullable(),
    container: updateContainer.optional().nullable(),
    replicas: z.number().gte(0).lte(500).optional().nullable(),
    countryCodes: z.array(z.string()).min(1).max(500).optional().nullable(),
    networking: updateContainerGroupNetworking.optional(),
    livenessProbe: containerGroupLivenessProbe.optional().nullable(),
    readinessProbe: containerGroupReadinessProbe.optional().nullable(),
    startupProbe: containerGroupStartupProbe.optional().nullable(),
    queueAutoscaler: queueBasedAutoscalerConfiguration.optional(),
  });
});

/**
 * Represents a request to update a container group
 * @typedef  {ContainerGroupPatch} containerGroupPatch - Represents a request to update a container group - Represents a request to update a container group
 * @property {string} - The display name for the container group. If null is provided, the display name will be set to the container group name.
 * @property {UpdateContainer} - Represents an update container object
 * @property {number} - The desired number of instances for your container group deployment.
 * @property {CountryCode[]} - List of countries nodes must be located in. Remove this field to permit nodes from any country.
 * @property {UpdateContainerGroupNetworking} - Represents update container group networking parameters
 * @property {ContainerGroupLivenessProbe} - Defines a liveness probe for container groups that determines when to restart a container if it becomes unhealthy
 * @property {ContainerGroupReadinessProbe} - Defines how to check if a container is ready to serve traffic. The readiness probe determines whether the container's application is ready to accept traffic. If the readiness probe fails, the container is considered not ready and traffic will not be sent to it.
 * @property {ContainerGroupStartupProbe} - Defines a probe that checks if a container application has started successfully. Startup probes help prevent applications from being prematurely marked as unhealthy during initialization. The probe can use HTTP requests, TCP connections, gRPC calls, or shell commands to determine startup status.
 * @property {QueueBasedAutoscalerConfiguration} - Defines configuration for automatically scaling container instances based on queue length. The autoscaler monitors a queue and adjusts the number of running replicas to maintain the desired queue length.
 */
export type ContainerGroupPatch = z.infer<typeof containerGroupPatch>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupPatchResponse = z.lazy(() => {
  return z
    .object({
      display_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/)
        .optional()
        .nullable(),
      container: updateContainerResponse.optional().nullable(),
      replicas: z.number().gte(0).lte(500).optional().nullable(),
      country_codes: z.array(z.string()).min(1).max(500).optional().nullable(),
      networking: updateContainerGroupNetworkingResponse.optional(),
      liveness_probe: containerGroupLivenessProbeResponse.optional().nullable(),
      readiness_probe: containerGroupReadinessProbeResponse.optional().nullable(),
      startup_probe: containerGroupStartupProbeResponse.optional().nullable(),
      queue_autoscaler: queueBasedAutoscalerConfigurationResponse.optional(),
    })
    .transform((data) => ({
      displayName: data['display_name'],
      container: data['container'],
      replicas: data['replicas'],
      countryCodes: data['country_codes'],
      networking: data['networking'],
      livenessProbe: data['liveness_probe'],
      readinessProbe: data['readiness_probe'],
      startupProbe: data['startup_probe'],
      queueAutoscaler: data['queue_autoscaler'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupPatchRequest = z.lazy(() => {
  return z
    .object({
      displayName: z.string().nullable().optional(),
      container: updateContainerRequest.nullable().optional(),
      replicas: z.number().nullable().optional(),
      countryCodes: z.array(z.string()).nullable().optional(),
      networking: updateContainerGroupNetworkingRequest.optional(),
      livenessProbe: containerGroupLivenessProbeRequest.nullable().optional(),
      readinessProbe: containerGroupReadinessProbeRequest.nullable().optional(),
      startupProbe: containerGroupStartupProbeRequest.nullable().optional(),
      queueAutoscaler: queueBasedAutoscalerConfigurationRequest.optional(),
    })
    .transform((data) => ({
      display_name: data['displayName'],
      container: data['container'],
      replicas: data['replicas'],
      country_codes: data['countryCodes'],
      networking: data['networking'],
      liveness_probe: data['livenessProbe'],
      readiness_probe: data['readinessProbe'],
      startup_probe: data['startupProbe'],
      queue_autoscaler: data['queueAutoscaler'],
    }));
});
