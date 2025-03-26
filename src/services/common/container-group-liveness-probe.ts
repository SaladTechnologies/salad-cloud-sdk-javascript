import { z } from 'zod';
import {
  ContainerGroupProbeExec,
  containerGroupProbeExec,
  containerGroupProbeExecRequest,
  containerGroupProbeExecResponse,
} from './container-group-probe-exec';
import {
  ContainerGroupGRpcProbe,
  containerGroupGRpcProbe,
  containerGroupGRpcProbeRequest,
  containerGroupGRpcProbeResponse,
} from './container-group-g-rpc-probe';
import {
  ContainerGroupHttpProbeConfiguration,
  containerGroupHttpProbeConfiguration,
  containerGroupHttpProbeConfigurationRequest,
  containerGroupHttpProbeConfigurationResponse,
} from './container-group-http-probe-configuration';
import {
  ContainerGroupTcpProbe,
  containerGroupTcpProbe,
  containerGroupTcpProbeRequest,
  containerGroupTcpProbeResponse,
} from './container-group-tcp-probe';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupLivenessProbe = z.lazy(() => {
  return z.object({
    exec: containerGroupProbeExec.optional(),
    failureThreshold: z.number().gte(1).lte(20),
    grpc: containerGroupGRpcProbe.optional(),
    http: containerGroupHttpProbeConfiguration.optional(),
    initialDelaySeconds: z.number().gte(0).lte(1200),
    periodSeconds: z.number().gte(1).lte(120),
    successThreshold: z.number().gte(1).lte(10),
    tcp: containerGroupTcpProbe.optional(),
    timeoutSeconds: z.number().gte(1).lte(60),
  });
});

/**
 * Defines a liveness probe for container groups that determines when to restart a container if it becomes unhealthy
 * @typedef  {ContainerGroupLivenessProbe} containerGroupLivenessProbe - Defines a liveness probe for container groups that determines when to restart a container if it becomes unhealthy - Defines a liveness probe for container groups that determines when to restart a container if it becomes unhealthy
 * @property {ContainerGroupProbeExec} - Defines the exec action for a probe in a container group. This is used to execute a command inside a container for health checks.
 * @property {number} - Number of consecutive failures required to consider the probe as failed
 * @property {ContainerGroupGRpcProbe} - Configuration for gRPC-based health probes in container groups, used to determine container health status.
 * @property {ContainerGroupHttpProbeConfiguration} - Defines HTTP probe configuration for container health checks within a container group.
 * @property {number} - Number of seconds to wait after container start before initiating liveness probes
 * @property {number} - Frequency in seconds at which the probe should be executed
 * @property {number} - Number of consecutive successes required to consider the probe successful
 * @property {ContainerGroupTcpProbe} - Configuration for a TCP probe used to check container health via network connectivity.
 * @property {number} - Number of seconds after which the probe times out if no response is received
 */
export type ContainerGroupLivenessProbe = z.infer<typeof containerGroupLivenessProbe>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupLivenessProbeResponse = z.lazy(() => {
  return z
    .object({
      exec: containerGroupProbeExecResponse.optional(),
      failure_threshold: z.number().gte(1).lte(20),
      grpc: containerGroupGRpcProbeResponse.optional(),
      http: containerGroupHttpProbeConfigurationResponse.optional(),
      initial_delay_seconds: z.number().gte(0).lte(1200),
      period_seconds: z.number().gte(1).lte(120),
      success_threshold: z.number().gte(1).lte(10),
      tcp: containerGroupTcpProbeResponse.optional(),
      timeout_seconds: z.number().gte(1).lte(60),
    })
    .transform((data) => ({
      exec: data['exec'],
      failureThreshold: data['failure_threshold'],
      grpc: data['grpc'],
      http: data['http'],
      initialDelaySeconds: data['initial_delay_seconds'],
      periodSeconds: data['period_seconds'],
      successThreshold: data['success_threshold'],
      tcp: data['tcp'],
      timeoutSeconds: data['timeout_seconds'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupLivenessProbeRequest = z.lazy(() => {
  return z
    .object({
      exec: containerGroupProbeExecRequest.optional(),
      failureThreshold: z.number(),
      grpc: containerGroupGRpcProbeRequest.optional(),
      http: containerGroupHttpProbeConfigurationRequest.optional(),
      initialDelaySeconds: z.number(),
      periodSeconds: z.number(),
      successThreshold: z.number(),
      tcp: containerGroupTcpProbeRequest.optional(),
      timeoutSeconds: z.number(),
    })
    .transform((data) => ({
      exec: data['exec'],
      failure_threshold: data['failureThreshold'],
      grpc: data['grpc'],
      http: data['http'],
      initial_delay_seconds: data['initialDelaySeconds'],
      period_seconds: data['periodSeconds'],
      success_threshold: data['successThreshold'],
      tcp: data['tcp'],
      timeout_seconds: data['timeoutSeconds'],
    }));
});
