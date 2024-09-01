import { z } from 'zod';
import {
  containerGroupProbeTcp,
  containerGroupProbeTcpRequest,
  containerGroupProbeTcpResponse,
} from './container-group-probe-tcp';
import {
  containerGroupProbeHttp,
  containerGroupProbeHttpRequest,
  containerGroupProbeHttpResponse,
} from './container-group-probe-http';
import {
  containerGroupProbeGrpc,
  containerGroupProbeGrpcRequest,
  containerGroupProbeGrpcResponse,
} from './container-group-probe-grpc';
import {
  containerGroupProbeExec,
  containerGroupProbeExecRequest,
  containerGroupProbeExecResponse,
} from './container-group-probe-exec';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupReadinessProbe = z.lazy(() => {
  return z.object({
    tcp: containerGroupProbeTcp.optional(),
    http: containerGroupProbeHttp.optional(),
    grpc: containerGroupProbeGrpc.optional(),
    exec: containerGroupProbeExec.optional(),
    initialDelaySeconds: z.number().gte(0),
    periodSeconds: z.number().gte(1),
    timeoutSeconds: z.number().gte(1),
    successThreshold: z.number().gte(1),
    failureThreshold: z.number().gte(1),
  });
});

/**
 * Represents the container group readiness probe
 * @typedef  {ContainerGroupReadinessProbe} containerGroupReadinessProbe - Represents the container group readiness probe - Represents the container group readiness probe
 * @property {ContainerGroupProbeTcp}
 * @property {ContainerGroupProbeHttp}
 * @property {ContainerGroupProbeGrpc}
 * @property {ContainerGroupProbeExec}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type ContainerGroupReadinessProbe = z.infer<typeof containerGroupReadinessProbe>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupReadinessProbeResponse = z.lazy(() => {
  return z
    .object({
      tcp: containerGroupProbeTcpResponse.optional(),
      http: containerGroupProbeHttpResponse.optional(),
      grpc: containerGroupProbeGrpcResponse.optional(),
      exec: containerGroupProbeExecResponse.optional(),
      initial_delay_seconds: z.number().gte(0),
      period_seconds: z.number().gte(1),
      timeout_seconds: z.number().gte(1),
      success_threshold: z.number().gte(1),
      failure_threshold: z.number().gte(1),
    })
    .transform((data) => ({
      tcp: data['tcp'],
      http: data['http'],
      grpc: data['grpc'],
      exec: data['exec'],
      initialDelaySeconds: data['initial_delay_seconds'],
      periodSeconds: data['period_seconds'],
      timeoutSeconds: data['timeout_seconds'],
      successThreshold: data['success_threshold'],
      failureThreshold: data['failure_threshold'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupReadinessProbeRequest = z.lazy(() => {
  return z
    .object({
      tcp: containerGroupProbeTcpRequest.nullish(),
      http: containerGroupProbeHttpRequest.nullish(),
      grpc: containerGroupProbeGrpcRequest.nullish(),
      exec: containerGroupProbeExecRequest.nullish(),
      initialDelaySeconds: z.number().nullish(),
      periodSeconds: z.number().nullish(),
      timeoutSeconds: z.number().nullish(),
      successThreshold: z.number().nullish(),
      failureThreshold: z.number().nullish(),
    })
    .transform((data) => ({
      tcp: data['tcp'],
      http: data['http'],
      grpc: data['grpc'],
      exec: data['exec'],
      initial_delay_seconds: data['initialDelaySeconds'],
      period_seconds: data['periodSeconds'],
      timeout_seconds: data['timeoutSeconds'],
      success_threshold: data['successThreshold'],
      failure_threshold: data['failureThreshold'],
    }));
});
