import { z } from 'zod';
import { container, containerRequest, containerResponse } from './container';
import { containerGroupState, containerGroupStateRequest, containerGroupStateResponse } from './container-group-state';
import {
  containerGroupNetworking,
  containerGroupNetworkingRequest,
  containerGroupNetworkingResponse,
} from './container-group-networking';
import {
  containerGroupLivenessProbe,
  containerGroupLivenessProbeRequest,
  containerGroupLivenessProbeResponse,
} from './container-group-liveness-probe';
import {
  containerGroupReadinessProbe,
  containerGroupReadinessProbeRequest,
  containerGroupReadinessProbeResponse,
} from './container-group-readiness-probe';
import {
  containerGroupStartupProbe,
  containerGroupStartupProbeRequest,
  containerGroupStartupProbeResponse,
} from './container-group-startup-probe';
import {
  containerGroupQueueConnection,
  containerGroupQueueConnectionRequest,
  containerGroupQueueConnectionResponse,
} from './container-group-queue-connection';
import { queueAutoscaler, queueAutoscalerRequest, queueAutoscalerResponse } from './queue-autoscaler';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroup = z.lazy(() => {
  return z.object({
    id: z.string(),
    name: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    displayName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ ,-.0-9A-Za-z]+$/),
    container: container,
    autostartPolicy: z.boolean(),
    restartPolicy: z.string(),
    replicas: z.number().gte(0).lte(100),
    currentState: containerGroupState,
    countryCodes: z.array(z.string()).min(1).max(500).optional(),
    networking: containerGroupNetworking.optional().nullable(),
    livenessProbe: containerGroupLivenessProbe.optional().nullable(),
    readinessProbe: containerGroupReadinessProbe.optional().nullable(),
    startupProbe: containerGroupStartupProbe.optional().nullable(),
    queueConnection: containerGroupQueueConnection.optional().nullable(),
    createTime: z.string(),
    updateTime: z.string(),
    pendingChange: z.boolean(),
    version: z.number().gte(1),
    queueAutoscaler: queueAutoscaler.optional(),
  });
});

/**
 * Represents a container group
 * @typedef  {ContainerGroup} containerGroup - Represents a container group - Represents a container group
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {Container} - Represents a container
 * @property {boolean}
 * @property {ContainerRestartPolicy}
 * @property {number}
 * @property {ContainerGroupState} - Represents a container group state
 * @property {CountryCode[]} - List of countries nodes must be located in. Remove this field to permit nodes from any country.
 * @property {ContainerGroupNetworking} - Represents container group networking parameters
 * @property {ContainerGroupLivenessProbe} - Represents the container group liveness probe
 * @property {ContainerGroupReadinessProbe} - Represents the container group readiness probe
 * @property {ContainerGroupStartupProbe} - Represents the container group startup probe
 * @property {ContainerGroupQueueConnection} - Represents container group queue connection
 * @property {string}
 * @property {string}
 * @property {boolean}
 * @property {number}
 * @property {QueueAutoscaler} - Represents the autoscaling rules for a queue
 */
export type ContainerGroup = z.infer<typeof containerGroup>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      display_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/),
      container: containerResponse,
      autostart_policy: z.boolean(),
      restart_policy: z.string(),
      replicas: z.number().gte(0).lte(100),
      current_state: containerGroupStateResponse,
      country_codes: z.array(z.string()).min(1).max(500).optional(),
      networking: containerGroupNetworkingResponse.optional().nullable(),
      liveness_probe: containerGroupLivenessProbeResponse.optional().nullable(),
      readiness_probe: containerGroupReadinessProbeResponse.optional().nullable(),
      startup_probe: containerGroupStartupProbeResponse.optional().nullable(),
      queue_connection: containerGroupQueueConnectionResponse.optional().nullable(),
      create_time: z.string(),
      update_time: z.string(),
      pending_change: z.boolean(),
      version: z.number().gte(1),
      queue_autoscaler: queueAutoscalerResponse.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      displayName: data['display_name'],
      container: data['container'],
      autostartPolicy: data['autostart_policy'],
      restartPolicy: data['restart_policy'],
      replicas: data['replicas'],
      currentState: data['current_state'],
      countryCodes: data['country_codes'],
      networking: data['networking'],
      livenessProbe: data['liveness_probe'],
      readinessProbe: data['readiness_probe'],
      startupProbe: data['startup_probe'],
      queueConnection: data['queue_connection'],
      createTime: data['create_time'],
      updateTime: data['update_time'],
      pendingChange: data['pending_change'],
      version: data['version'],
      queueAutoscaler: data['queue_autoscaler'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      name: z.string().nullish(),
      displayName: z.string().nullish(),
      container: containerRequest.nullish(),
      autostartPolicy: z.boolean().nullish(),
      restartPolicy: z.string().nullish(),
      replicas: z.number().nullish(),
      currentState: containerGroupStateRequest.nullish(),
      countryCodes: z.array(z.string()).nullish(),
      networking: containerGroupNetworkingRequest.nullish(),
      livenessProbe: containerGroupLivenessProbeRequest.nullish(),
      readinessProbe: containerGroupReadinessProbeRequest.nullish(),
      startupProbe: containerGroupStartupProbeRequest.nullish(),
      queueConnection: containerGroupQueueConnectionRequest.nullish(),
      createTime: z.string().nullish(),
      updateTime: z.string().nullish(),
      pendingChange: z.boolean().nullish(),
      version: z.number().nullish(),
      queueAutoscaler: queueAutoscalerRequest.nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      display_name: data['displayName'],
      container: data['container'],
      autostart_policy: data['autostartPolicy'],
      restart_policy: data['restartPolicy'],
      replicas: data['replicas'],
      current_state: data['currentState'],
      country_codes: data['countryCodes'],
      networking: data['networking'],
      liveness_probe: data['livenessProbe'],
      readiness_probe: data['readinessProbe'],
      startup_probe: data['startupProbe'],
      queue_connection: data['queueConnection'],
      create_time: data['createTime'],
      update_time: data['updateTime'],
      pending_change: data['pendingChange'],
      version: data['version'],
      queue_autoscaler: data['queueAutoscaler'],
    }));
});
