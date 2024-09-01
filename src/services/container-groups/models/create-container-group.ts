import { z } from 'zod';
import { createContainer, createContainerRequest, createContainerResponse } from './create-container';
import {
  createContainerGroupNetworking,
  createContainerGroupNetworkingRequest,
  createContainerGroupNetworkingResponse,
} from './create-container-group-networking';
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
  containerGroupQueueConnection,
  containerGroupQueueConnectionRequest,
  containerGroupQueueConnectionResponse,
} from '../../common/container-group-queue-connection';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createContainerGroup = z.lazy(() => {
  return z.object({
    name: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    displayName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ ,-.0-9A-Za-z]+$/)
      .optional()
      .nullable(),
    container: createContainer,
    autostartPolicy: z.boolean(),
    restartPolicy: z.string(),
    replicas: z.number().gte(0).lte(250),
    countryCodes: z.array(z.string()).min(1).max(500).optional(),
    networking: createContainerGroupNetworking.optional().nullable(),
    livenessProbe: containerGroupLivenessProbe.optional().nullable(),
    readinessProbe: containerGroupReadinessProbe.optional().nullable(),
    startupProbe: containerGroupStartupProbe.optional().nullable(),
    queueConnection: containerGroupQueueConnection.optional().nullable(),
  });
});

/**
 * Represents a request to create a container group
 * @typedef  {CreateContainerGroup} createContainerGroup - Represents a request to create a container group - Represents a request to create a container group
 * @property {string}
 * @property {string}
 * @property {CreateContainer} - Represents a container
 * @property {boolean}
 * @property {ContainerRestartPolicy}
 * @property {number}
 * @property {CountryCode[]} - List of countries nodes must be located in. Remove this field to permit nodes from any country.
 * @property {CreateContainerGroupNetworking} - Represents container group networking parameters
 * @property {ContainerGroupLivenessProbe} - Represents the container group liveness probe
 * @property {ContainerGroupReadinessProbe} - Represents the container group readiness probe
 * @property {ContainerGroupStartupProbe} - Represents the container group startup probe
 * @property {ContainerGroupQueueConnection} - Represents container group queue connection
 */
export type CreateContainerGroup = z.infer<typeof createContainerGroup>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createContainerGroupResponse = z.lazy(() => {
  return z
    .object({
      name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      display_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[ ,-.0-9A-Za-z]+$/)
        .optional()
        .nullable(),
      container: createContainerResponse,
      autostart_policy: z.boolean(),
      restart_policy: z.string(),
      replicas: z.number().gte(0).lte(250),
      country_codes: z.array(z.string()).min(1).max(500).optional(),
      networking: createContainerGroupNetworkingResponse.optional().nullable(),
      liveness_probe: containerGroupLivenessProbeResponse.optional().nullable(),
      readiness_probe: containerGroupReadinessProbeResponse.optional().nullable(),
      startup_probe: containerGroupStartupProbeResponse.optional().nullable(),
      queue_connection: containerGroupQueueConnectionResponse.optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      displayName: data['display_name'],
      container: data['container'],
      autostartPolicy: data['autostart_policy'],
      restartPolicy: data['restart_policy'],
      replicas: data['replicas'],
      countryCodes: data['country_codes'],
      networking: data['networking'],
      livenessProbe: data['liveness_probe'],
      readinessProbe: data['readiness_probe'],
      startupProbe: data['startup_probe'],
      queueConnection: data['queue_connection'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createContainerGroupRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().nullish(),
      displayName: z.string().nullish(),
      container: createContainerRequest.nullish(),
      autostartPolicy: z.boolean().nullish(),
      restartPolicy: z.string().nullish(),
      replicas: z.number().nullish(),
      countryCodes: z.array(z.string()).nullish(),
      networking: createContainerGroupNetworkingRequest.nullish(),
      livenessProbe: containerGroupLivenessProbeRequest.nullish(),
      readinessProbe: containerGroupReadinessProbeRequest.nullish(),
      startupProbe: containerGroupStartupProbeRequest.nullish(),
      queueConnection: containerGroupQueueConnectionRequest.nullish(),
    })
    .transform((data) => ({
      name: data['name'],
      display_name: data['displayName'],
      container: data['container'],
      autostart_policy: data['autostartPolicy'],
      restart_policy: data['restartPolicy'],
      replicas: data['replicas'],
      country_codes: data['countryCodes'],
      networking: data['networking'],
      liveness_probe: data['livenessProbe'],
      readiness_probe: data['readinessProbe'],
      startup_probe: data['startupProbe'],
      queue_connection: data['queueConnection'],
    }));
});
