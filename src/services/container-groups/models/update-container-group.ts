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

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateContainerGroup = z.lazy(() => {
  return z.object({
    displayName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[ ,-.0-9A-Za-z]+$/)
      .optional()
      .nullable(),
    container: updateContainer.optional().nullable(),
    replicas: z.number().gte(0).lte(250).optional().nullable(),
    countryCodes: z.array(z.string()).min(1).max(500).optional().nullable(),
    networking: updateContainerGroupNetworking.optional(),
    livenessProbe: containerGroupLivenessProbe.optional().nullable(),
    readinessProbe: containerGroupReadinessProbe.optional().nullable(),
    startupProbe: containerGroupStartupProbe.optional().nullable(),
  });
});

/**
 * Represents a request to update a container group
 * @typedef  {UpdateContainerGroup} updateContainerGroup - Represents a request to update a container group - Represents a request to update a container group
 * @property {string}
 * @property {UpdateContainer} - Represents an update container object
 * @property {number}
 * @property {CountryCode[]} - List of countries nodes must be located in. Remove this field to permit nodes from any country.
 * @property {UpdateContainerGroupNetworking} - Represents update container group networking parameters
 * @property {ContainerGroupLivenessProbe} - Represents the container group liveness probe
 * @property {ContainerGroupReadinessProbe} - Represents the container group readiness probe
 * @property {ContainerGroupStartupProbe} - Represents the container group startup probe
 */
export type UpdateContainerGroup = z.infer<typeof updateContainerGroup>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateContainerGroupResponse = z.lazy(() => {
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
      replicas: z.number().gte(0).lte(250).optional().nullable(),
      country_codes: z.array(z.string()).min(1).max(500).optional().nullable(),
      networking: updateContainerGroupNetworkingResponse.optional(),
      liveness_probe: containerGroupLivenessProbeResponse.optional().nullable(),
      readiness_probe: containerGroupReadinessProbeResponse.optional().nullable(),
      startup_probe: containerGroupStartupProbeResponse.optional().nullable(),
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
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateContainerGroupRequest = z.lazy(() => {
  return z
    .object({
      displayName: z.string().nullish(),
      container: updateContainerRequest.nullish(),
      replicas: z.number().nullish(),
      countryCodes: z.array(z.string()).nullish(),
      networking: updateContainerGroupNetworkingRequest.nullish(),
      livenessProbe: containerGroupLivenessProbeRequest.nullish(),
      readinessProbe: containerGroupReadinessProbeRequest.nullish(),
      startupProbe: containerGroupStartupProbeRequest.nullish(),
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
    }));
});
