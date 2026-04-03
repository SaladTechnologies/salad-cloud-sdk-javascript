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
 * Zod schema for the ContainerGroupReadinessProbe model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerGroupReadinessProbe = z.lazy(() => {
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
 * Defines how to check if a container is ready to serve traffic. The readiness probe determines whether the container's application is ready to accept traffic. If the readiness probe fails, the container is considered not ready and traffic will not be sent to it.
 * @typedef  {ContainerGroupReadinessProbe} containerGroupReadinessProbe - Defines how to check if a container is ready to serve traffic. The readiness probe determines whether the container's application is ready to accept traffic. If the readiness probe fails, the container is considered not ready and traffic will not be sent to it. - Defines how to check if a container is ready to serve traffic. The readiness probe determines whether the container's application is ready to accept traffic. If the readiness probe fails, the container is considered not ready and traffic will not be sent to it.
 * @property {ContainerGroupProbeExec} - Defines the exec action for a probe in a container group. This is used to execute a command inside a container for health checks.
 * @property {number} - The number of consecutive failures required to consider the probe failed. After this many consecutive failures, the container is marked as not ready.
 * @property {ContainerGroupGRpcProbe} - Configuration for gRPC-based health probes in container groups, used to determine container health status.
 * @property {ContainerGroupHttpProbeConfiguration} - Defines HTTP probe configuration for container health checks within a container group.
 * @property {number} - The time in seconds to wait after the container starts before initiating the first probe. This allows time for the application to initialize before being tested.
 * @property {number} - How frequently (in seconds) the probe should be executed during the container's lifetime. Specifies the interval between consecutive probe executions.
 * @property {number} - The minimum consecutive successes required to consider the probe successful after it has failed. Defines how many successful probe results are needed to transition from failure to success.
 * @property {ContainerGroupTcpProbe} - Configuration for a TCP probe used to check container health via network connectivity.
 * @property {number} - The maximum time in seconds that the probe has to complete. If the probe doesn't return a result before the timeout, it's considered failed.
 */
export type ContainerGroupReadinessProbe = z.infer<typeof containerGroupReadinessProbe>;

/**
 * Zod schema for mapping API responses to the ContainerGroupReadinessProbe application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupReadinessProbeResponse = z.lazy(() => {
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
 * Zod schema for mapping the ContainerGroupReadinessProbe application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupReadinessProbeRequest = z.lazy(() => {
  return z
    .object({
      exec: containerGroupProbeExecRequest.optional(),
      failureThreshold: z.number().gte(1).lte(20),
      grpc: containerGroupGRpcProbeRequest.optional(),
      http: containerGroupHttpProbeConfigurationRequest.optional(),
      initialDelaySeconds: z.number().gte(0).lte(1200),
      periodSeconds: z.number().gte(1).lte(120),
      successThreshold: z.number().gte(1).lte(10),
      tcp: containerGroupTcpProbeRequest.optional(),
      timeoutSeconds: z.number().gte(1).lte(60),
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
