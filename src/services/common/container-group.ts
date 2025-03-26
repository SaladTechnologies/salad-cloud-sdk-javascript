import { z } from 'zod';
import { Container, container, containerRequest, containerResponse } from './container';
import {
  ContainerGroupState,
  containerGroupState,
  containerGroupStateRequest,
  containerGroupStateResponse,
} from './container-group-state';
import {
  ContainerGroupLivenessProbe,
  containerGroupLivenessProbe,
  containerGroupLivenessProbeRequest,
  containerGroupLivenessProbeResponse,
} from './container-group-liveness-probe';
import {
  ContainerGroupNetworkingConfiguration,
  containerGroupNetworkingConfiguration,
  containerGroupNetworkingConfigurationRequest,
  containerGroupNetworkingConfigurationResponse,
} from './container-group-networking-configuration';
import {
  QueueBasedAutoscalerConfiguration,
  queueBasedAutoscalerConfiguration,
  queueBasedAutoscalerConfigurationRequest,
  queueBasedAutoscalerConfigurationResponse,
} from './queue-based-autoscaler-configuration';
import {
  ContainerGroupQueueConnection,
  containerGroupQueueConnection,
  containerGroupQueueConnectionRequest,
  containerGroupQueueConnectionResponse,
} from './container-group-queue-connection';
import {
  ContainerGroupReadinessProbe,
  containerGroupReadinessProbe,
  containerGroupReadinessProbeRequest,
  containerGroupReadinessProbeResponse,
} from './container-group-readiness-probe';
import {
  ContainerGroupStartupProbe,
  containerGroupStartupProbe,
  containerGroupStartupProbeRequest,
  containerGroupStartupProbeResponse,
} from './container-group-startup-probe';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroup = z.lazy(() => {
  return z.object({
    autostartPolicy: z.boolean(),
    container: container,
    countryCodes: z.array(z.string()).min(1).max(500),
    createTime: z.string(),
    currentState: containerGroupState,
    displayName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ ,-.0-9A-Za-z]+$/),
    id: z.string(),
    livenessProbe: containerGroupLivenessProbe.optional().nullable(),
    name: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    networking: containerGroupNetworkingConfiguration.optional(),
    organizationName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    pendingChange: z.boolean(),
    priority: z.string().nullable(),
    projectName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    queueAutoscaler: queueBasedAutoscalerConfiguration.optional(),
    queueConnection: containerGroupQueueConnection.optional(),
    readinessProbe: containerGroupReadinessProbe.optional().nullable(),
    replicas: z.number().gte(0).lte(500),
    restartPolicy: z.string(),
    startupProbe: containerGroupStartupProbe.optional().nullable(),
    updateTime: z.string(),
    version: z.number().gte(1).lte(2147483647),
  });
});

/**
 * A container group definition that represents a scalable set of identical containers running as a distributed service
 * @typedef  {ContainerGroup} containerGroup - A container group definition that represents a scalable set of identical containers running as a distributed service - A container group definition that represents a scalable set of identical containers running as a distributed service
 * @property {boolean} - Defines whether containers in this group should automatically start when deployed (true) or require manual starting (false)
 * @property {Container} - Represents a container with its configuration and resource requirements.
 * @property {CountryCode[]} - List of country codes where container instances are permitted to run. When not specified or empty, containers may run in any available region.
 * @property {string} - ISO 8601 timestamp when this container group was initially created
 * @property {ContainerGroupState} - Represents the operational state of a container group during its lifecycle, including timing information, status, and instance distribution metrics. This state captures the current execution status, start and finish times, and provides visibility into the operational health across instances.
 * @property {string} - The display-friendly name of the resource.
 * @property {string} - The container group identifier.
 * @property {ContainerGroupLivenessProbe} - Defines a liveness probe for container groups that determines when to restart a container if it becomes unhealthy
 * @property {string} - The container group name.
 * @property {ContainerGroupNetworkingConfiguration} - Network configuration for container groups that defines connectivity, routing, and access control settings
 * @property {string} - The organization name.
 * @property {boolean} - Indicates whether a configuration change has been requested but not yet applied to all containers in the group
 * @property {ContainerGroupPriority} - Specifies the priority level for container group execution, which determines resource allocation and scheduling precedence.
 * @property {string} - The project name.
 * @property {QueueBasedAutoscalerConfiguration} - Defines configuration for automatically scaling container instances based on queue length. The autoscaler monitors a queue and adjusts the number of running replicas to maintain the desired queue length.
 * @property {ContainerGroupQueueConnection} - Configuration for connecting a container group to a message queue system, enabling asynchronous communication between services.
 * @property {ContainerGroupReadinessProbe} - Defines how to check if a container is ready to serve traffic. The readiness probe determines whether the container's application is ready to accept traffic. If the readiness probe fails, the container is considered not ready and traffic will not be sent to it.
 * @property {number} - The container group replicas.
 * @property {ContainerRestartPolicy} - Specifies the policy for restarting containers when they exit or fail.
 * @property {ContainerGroupStartupProbe} - Defines a probe that checks if a container application has started successfully. Startup probes help prevent applications from being prematurely marked as unhealthy during initialization. The probe can use HTTP requests, TCP connections, gRPC calls, or shell commands to determine startup status.
 * @property {string} - ISO 8601 timestamp when this container group was last updated
 * @property {number} - Incremental version number that increases with each configuration change to the container group
 */
export type ContainerGroup = z.infer<typeof containerGroup>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupResponse = z.lazy(() => {
  return z
    .object({
      autostart_policy: z.boolean(),
      container: containerResponse,
      country_codes: z.array(z.string()).min(1).max(500),
      create_time: z.string(),
      current_state: containerGroupStateResponse,
      display_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/),
      id: z.string(),
      liveness_probe: containerGroupLivenessProbeResponse.optional().nullable(),
      name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      networking: containerGroupNetworkingConfigurationResponse.optional(),
      organization_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      pending_change: z.boolean(),
      priority: z.string().nullable(),
      project_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      queue_autoscaler: queueBasedAutoscalerConfigurationResponse.optional(),
      queue_connection: containerGroupQueueConnectionResponse.optional(),
      readiness_probe: containerGroupReadinessProbeResponse.optional().nullable(),
      replicas: z.number().gte(0).lte(500),
      restart_policy: z.string(),
      startup_probe: containerGroupStartupProbeResponse.optional().nullable(),
      update_time: z.string(),
      version: z.number().gte(1).lte(2147483647),
    })
    .transform((data) => ({
      autostartPolicy: data['autostart_policy'],
      container: data['container'],
      countryCodes: data['country_codes'],
      createTime: data['create_time'],
      currentState: data['current_state'],
      displayName: data['display_name'],
      id: data['id'],
      livenessProbe: data['liveness_probe'],
      name: data['name'],
      networking: data['networking'],
      organizationName: data['organization_name'],
      pendingChange: data['pending_change'],
      priority: data['priority'],
      projectName: data['project_name'],
      queueAutoscaler: data['queue_autoscaler'],
      queueConnection: data['queue_connection'],
      readinessProbe: data['readiness_probe'],
      replicas: data['replicas'],
      restartPolicy: data['restart_policy'],
      startupProbe: data['startup_probe'],
      updateTime: data['update_time'],
      version: data['version'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupRequest = z.lazy(() => {
  return z
    .object({
      autostartPolicy: z.boolean(),
      container: containerRequest,
      countryCodes: z.array(z.string()),
      createTime: z.string(),
      currentState: containerGroupStateRequest,
      displayName: z.string(),
      id: z.string(),
      livenessProbe: containerGroupLivenessProbeRequest.nullable().optional(),
      name: z.string(),
      networking: containerGroupNetworkingConfigurationRequest.optional(),
      organizationName: z.string(),
      pendingChange: z.boolean(),
      priority: z.string().nullable(),
      projectName: z.string(),
      queueAutoscaler: queueBasedAutoscalerConfigurationRequest.optional(),
      queueConnection: containerGroupQueueConnectionRequest.optional(),
      readinessProbe: containerGroupReadinessProbeRequest.nullable().optional(),
      replicas: z.number(),
      restartPolicy: z.string(),
      startupProbe: containerGroupStartupProbeRequest.nullable().optional(),
      updateTime: z.string(),
      version: z.number(),
    })
    .transform((data) => ({
      autostart_policy: data['autostartPolicy'],
      container: data['container'],
      country_codes: data['countryCodes'],
      create_time: data['createTime'],
      current_state: data['currentState'],
      display_name: data['displayName'],
      id: data['id'],
      liveness_probe: data['livenessProbe'],
      name: data['name'],
      networking: data['networking'],
      organization_name: data['organizationName'],
      pending_change: data['pendingChange'],
      priority: data['priority'],
      project_name: data['projectName'],
      queue_autoscaler: data['queueAutoscaler'],
      queue_connection: data['queueConnection'],
      readiness_probe: data['readinessProbe'],
      replicas: data['replicas'],
      restart_policy: data['restartPolicy'],
      startup_probe: data['startupProbe'],
      update_time: data['updateTime'],
      version: data['version'],
    }));
});
