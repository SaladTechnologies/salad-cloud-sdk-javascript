import { z } from 'zod';
import {
  containerGroupProbeHttpHeaders2,
  containerGroupProbeHttpHeaders2Request,
  containerGroupProbeHttpHeaders2Response,
} from './container-group-probe-http-headers-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerGroupProbeHttp = z.lazy(() => {
  return z.object({
    path: z.string(),
    port: z.number().gte(0).lte(65536),
    scheme: z.string().optional(),
    headers: z.array(containerGroupProbeHttpHeaders2).optional(),
  });
});

/**
 *
 * @typedef  {ContainerGroupProbeHttp} containerGroupProbeHttp
 * @property {string}
 * @property {number}
 * @property {ContainerProbeHttpScheme}
 * @property {ContainerGroupProbeHttpHeaders2[]}
 */
export type ContainerGroupProbeHttp = z.infer<typeof containerGroupProbeHttp>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupProbeHttpResponse = z.lazy(() => {
  return z
    .object({
      path: z.string(),
      port: z.number().gte(0).lte(65536),
      scheme: z.string().optional(),
      headers: z.array(containerGroupProbeHttpHeaders2Response).optional(),
    })
    .transform((data) => ({
      path: data['path'],
      port: data['port'],
      scheme: data['scheme'],
      headers: data['headers'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerGroupProbeHttpRequest = z.lazy(() => {
  return z
    .object({
      path: z.string().nullish(),
      port: z.number().nullish(),
      scheme: z.string().nullish(),
      headers: z.array(containerGroupProbeHttpHeaders2Request).nullish(),
    })
    .transform((data) => ({
      path: data['path'],
      port: data['port'],
      scheme: data['scheme'],
      headers: data['headers'],
    }));
});
