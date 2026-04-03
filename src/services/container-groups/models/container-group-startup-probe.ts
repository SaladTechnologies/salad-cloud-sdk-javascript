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
 * Zod schema for the ContainerGroupStartupProbe model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const containerGroupStartupProbe = z.lazy(() => {
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
 * Defines a probe that checks if a container application has started successfully. Startup probes help prevent applications from being prematurely marked as unhealthy during initialization. The probe can use HTTP requests, TCP connections, gRPC calls, or shell commands to determine startup status.
 * @typedef  {ContainerGroupStartupProbe} containerGroupStartupProbe - Defines a probe that checks if a container application has started successfully. Startup probes help prevent applications from being prematurely marked as unhealthy during initialization. The probe can use HTTP requests, TCP connections, gRPC calls, or shell commands to determine startup status. - Defines a probe that checks if a container application has started successfully. Startup probes help prevent applications from being prematurely marked as unhealthy during initialization. The probe can use HTTP requests, TCP connections, gRPC calls, or shell commands to determine startup status.
 * @property {ContainerGroupProbeExec} - Defines the exec action for a probe in a container group. This is used to execute a command inside a container for health checks.
 * @property {number} - Number of times the probe must fail before considering the container not started
 * @property {ContainerGroupGRpcProbe} - Configuration for gRPC-based health probes in container groups, used to determine container health status.
 * @property {ContainerGroupHttpProbeConfiguration} - Defines HTTP probe configuration for container health checks within a container group.
 * @property {number} - Number of seconds to wait after container startup before the first probe is executed
 * @property {number} - How frequently (in seconds) to perform the probe
 * @property {number} - Minimum consecutive successes required for the probe to be considered successful
 * @property {ContainerGroupTcpProbe} - Configuration for a TCP probe used to check container health via network connectivity.
 * @property {number} - Maximum time (in seconds) to wait for a probe response before considering it failed
 */
export type ContainerGroupStartupProbe = z.infer<typeof containerGroupStartupProbe>;

/**
 * Zod schema for mapping API responses to the ContainerGroupStartupProbe application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupStartupProbeResponse = z.lazy(() => {
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
 * Zod schema for mapping the ContainerGroupStartupProbe application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const containerGroupStartupProbeRequest = z.lazy(() => {
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
