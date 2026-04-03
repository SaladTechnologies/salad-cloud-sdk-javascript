import { z } from 'zod';
import { UpdateContainer, updateContainer, updateContainerRequest, updateContainerResponse } from './update-container';
import {
  ContainerGroupLivenessProbe,
  containerGroupLivenessProbe,
  containerGroupLivenessProbeRequest,
  containerGroupLivenessProbeResponse,
} from './container-group-liveness-probe';
import {
  UpdateContainerGroupNetworking,
  updateContainerGroupNetworking,
  updateContainerGroupNetworkingRequest,
  updateContainerGroupNetworkingResponse,
} from './update-container-group-networking';
import {
  QueueBasedAutoscalerConfiguration,
  queueBasedAutoscalerConfiguration,
  queueBasedAutoscalerConfigurationRequest,
  queueBasedAutoscalerConfigurationResponse,
} from './queue-based-autoscaler-configuration';
import {
  ContainerGroupReadinessProbe,
  containerGroupReadinessProbe,
  containerGroupReadinessProbeRequest,
  containerGroupReadinessProbeResponse,
} from './container-group-readiness-probe';
import {
  ContainerGroupScalingAction,
  containerGroupScalingAction,
  containerGroupScalingActionRequest,
  containerGroupScalingActionResponse,
} from './container-group-scaling-action';
import {
  ContainerGroupStartupProbe,
  containerGroupStartupProbe,
  containerGroupStartupProbeRequest,
  containerGroupStartupProbeResponse,
} from './container-group-startup-probe';

/**
 * Zod schema for the ContainerGroupPatch model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerGroupPatch = z.lazy(() => {
  return z.object({
    container: updateContainer.optional().nullable(),
    countryCodes: z.array(z.string()).min(1).max(500).optional().nullable(),
    displayName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ ,-.0-9A-Za-z]+$/)
      .optional()
      .nullable(),
    livenessProbe: containerGroupLivenessProbe.optional().nullable(),
    networking: updateContainerGroupNetworking.optional(),
    queueAutoscaler: queueBasedAutoscalerConfiguration.optional(),
    readinessProbe: containerGroupReadinessProbe.optional().nullable(),
    replicas: z.number().gte(0).lte(500).optional().nullable(),
    scalingActions: z.array(containerGroupScalingAction).max(100).optional(),
    scheduledScalingEnabled: z.boolean().optional(),
    startupProbe: containerGroupStartupProbe.optional().nullable(),
  });
});

/**
 * Represents a request to update a container group
 * @typedef  {ContainerGroupPatch} containerGroupPatch - Represents a request to update a container group - Represents a request to update a container group
 * @property {UpdateContainer} - Represents an update container object
 * @property {CountryCode[]} - List of countries nodes must be located in. Remove this field to permit nodes from any country.
 * @property {string} - The display name for the container group. If null is provided, the display name will be set to the container group name.
 * @property {ContainerGroupLivenessProbe} - Defines a liveness probe for container groups that determines when to restart a container if it becomes unhealthy
 * @property {UpdateContainerGroupNetworking} - Represents update container group networking parameters
 * @property {QueueBasedAutoscalerConfiguration} - Defines configuration for automatically scaling container instances based on queue length. The autoscaler monitors a queue and adjusts the number of running replicas to maintain the desired queue length.
 * @property {ContainerGroupReadinessProbe} - Defines how to check if a container is ready to serve traffic. The readiness probe determines whether the container's application is ready to accept traffic. If the readiness probe fails, the container is considered not ready and traffic will not be sent to it.
 * @property {number} - The desired number of instances for your container group deployment.
 * @property {ContainerGroupScalingAction[]} - List of scaling actions configurations
 * @property {boolean} - Indicates if scheduled scaling is enabled
 * @property {ContainerGroupStartupProbe} - Defines a probe that checks if a container application has started successfully. Startup probes help prevent applications from being prematurely marked as unhealthy during initialization. The probe can use HTTP requests, TCP connections, gRPC calls, or shell commands to determine startup status.
 */
export type ContainerGroupPatch = z.infer<typeof containerGroupPatch>;

/**
 * Zod schema for mapping API responses to the ContainerGroupPatch application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupPatchResponse = z.lazy(() => {
  return z
    .object({
      container: updateContainerResponse.optional().nullable(),
      country_codes: z.array(z.string()).min(1).max(500).optional().nullable(),
      display_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/)
        .optional()
        .nullable(),
      liveness_probe: containerGroupLivenessProbeResponse.optional().nullable(),
      networking: updateContainerGroupNetworkingResponse.optional(),
      queue_autoscaler: queueBasedAutoscalerConfigurationResponse.optional(),
      readiness_probe: containerGroupReadinessProbeResponse.optional().nullable(),
      replicas: z.number().gte(0).lte(500).optional().nullable(),
      'scaling-actions': z.array(containerGroupScalingActionResponse).max(100).optional(),
      'scheduled-scaling-enabled': z.boolean().optional(),
      startup_probe: containerGroupStartupProbeResponse.optional().nullable(),
    })
    .transform((data) => ({
      container: data['container'],
      countryCodes: data['country_codes'],
      displayName: data['display_name'],
      livenessProbe: data['liveness_probe'],
      networking: data['networking'],
      queueAutoscaler: data['queue_autoscaler'],
      readinessProbe: data['readiness_probe'],
      replicas: data['replicas'],
      scalingActions: data['scaling-actions'],
      scheduledScalingEnabled: data['scheduled-scaling-enabled'],
      startupProbe: data['startup_probe'],
    }));
});

/**
 * Zod schema for mapping the ContainerGroupPatch application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupPatchRequest = z.lazy(() => {
  return z
    .object({
      container: updateContainerRequest.optional().nullable(),
      countryCodes: z.array(z.string()).min(1).max(500).optional().nullable(),
      displayName: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/)
        .optional()
        .nullable(),
      livenessProbe: containerGroupLivenessProbeRequest.optional().nullable(),
      networking: updateContainerGroupNetworkingRequest.optional(),
      queueAutoscaler: queueBasedAutoscalerConfigurationRequest.optional(),
      readinessProbe: containerGroupReadinessProbeRequest.optional().nullable(),
      replicas: z.number().gte(0).lte(500).optional().nullable(),
      scalingActions: z.array(containerGroupScalingActionRequest).max(100).optional(),
      scheduledScalingEnabled: z.boolean().optional(),
      startupProbe: containerGroupStartupProbeRequest.optional().nullable(),
    })
    .transform((data) => ({
      container: data['container'],
      country_codes: data['countryCodes'],
      display_name: data['displayName'],
      liveness_probe: data['livenessProbe'],
      networking: data['networking'],
      queue_autoscaler: data['queueAutoscaler'],
      readiness_probe: data['readinessProbe'],
      replicas: data['replicas'],
      'scaling-actions': data['scalingActions'],
      'scheduled-scaling-enabled': data['scheduledScalingEnabled'],
      startup_probe: data['startupProbe'],
    }));
});
