import { z } from 'zod';
import { httpHeaders3, httpHeaders3Request, httpHeaders3Response } from './http-headers-3';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loggingHttp2 = z.lazy(() => {
  return z.object({
    host: z.string().min(1).max(1000),
    port: z.number().gte(1).lte(65535),
    user: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    path: z.string().optional().nullable(),
    format: z.string(),
    headers: z.array(httpHeaders3).max(1000).optional().nullable(),
    compression: z.string(),
  });
});

/**
 *
 * @typedef  {LoggingHttp2} loggingHttp2
 * @property {string}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {HttpFormat2}
 * @property {HttpHeaders3[]}
 * @property {HttpCompression2}
 */
export type LoggingHttp2 = z.infer<typeof loggingHttp2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loggingHttp2Response = z.lazy(() => {
  return z
    .object({
      host: z.string().min(1).max(1000),
      port: z.number().gte(1).lte(65535),
      user: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      path: z.string().optional().nullable(),
      format: z.string(),
      headers: z.array(httpHeaders3Response).max(1000).optional().nullable(),
      compression: z.string(),
    })
    .transform((data) => ({
      host: data['host'],
      port: data['port'],
      user: data['user'],
      password: data['password'],
      path: data['path'],
      format: data['format'],
      headers: data['headers'],
      compression: data['compression'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loggingHttp2Request = z.lazy(() => {
  return z
    .object({
      host: z.string().nullish(),
      port: z.number().nullish(),
      user: z.string().nullish(),
      password: z.string().nullish(),
      path: z.string().nullish(),
      format: z.string().nullish(),
      headers: z.array(httpHeaders3Request).nullish(),
      compression: z.string().nullish(),
    })
    .transform((data) => ({
      host: data['host'],
      port: data['port'],
      user: data['user'],
      password: data['password'],
      path: data['path'],
      format: data['format'],
      headers: data['headers'],
      compression: data['compression'],
    }));
});
