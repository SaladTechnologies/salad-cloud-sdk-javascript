import { z } from 'zod';
import { loggingAxiom2, loggingAxiom2Request, loggingAxiom2Response } from './logging-axiom-2';
import { loggingDatadog2, loggingDatadog2Request, loggingDatadog2Response } from './logging-datadog-2';
import { loggingNewRelic2, loggingNewRelic2Request, loggingNewRelic2Response } from './logging-new-relic-2';
import { loggingSplunk2, loggingSplunk2Request, loggingSplunk2Response } from './logging-splunk-2';
import { loggingTcp2, loggingTcp2Request, loggingTcp2Response } from './logging-tcp-2';
import { loggingHttp2, loggingHttp2Request, loggingHttp2Response } from './logging-http-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createContainerLogging = z.lazy(() => {
  return z.object({
    axiom: loggingAxiom2.optional().nullable(),
    datadog: loggingDatadog2.optional().nullable(),
    newRelic: loggingNewRelic2.optional().nullable(),
    splunk: loggingSplunk2.optional().nullable(),
    tcp: loggingTcp2.optional().nullable(),
    http: loggingHttp2.optional().nullable(),
  });
});

/**
 *
 * @typedef  {CreateContainerLogging} createContainerLogging
 * @property {LoggingAxiom2}
 * @property {LoggingDatadog2}
 * @property {LoggingNewRelic2}
 * @property {LoggingSplunk2}
 * @property {LoggingTcp2}
 * @property {LoggingHttp2}
 */
export type CreateContainerLogging = z.infer<typeof createContainerLogging>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createContainerLoggingResponse = z.lazy(() => {
  return z
    .object({
      axiom: loggingAxiom2Response.optional().nullable(),
      datadog: loggingDatadog2Response.optional().nullable(),
      new_relic: loggingNewRelic2Response.optional().nullable(),
      splunk: loggingSplunk2Response.optional().nullable(),
      tcp: loggingTcp2Response.optional().nullable(),
      http: loggingHttp2Response.optional().nullable(),
    })
    .transform((data) => ({
      axiom: data['axiom'],
      datadog: data['datadog'],
      newRelic: data['new_relic'],
      splunk: data['splunk'],
      tcp: data['tcp'],
      http: data['http'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createContainerLoggingRequest = z.lazy(() => {
  return z
    .object({
      axiom: loggingAxiom2Request.nullish(),
      datadog: loggingDatadog2Request.nullish(),
      newRelic: loggingNewRelic2Request.nullish(),
      splunk: loggingSplunk2Request.nullish(),
      tcp: loggingTcp2Request.nullish(),
      http: loggingHttp2Request.nullish(),
    })
    .transform((data) => ({
      axiom: data['axiom'],
      datadog: data['datadog'],
      new_relic: data['newRelic'],
      splunk: data['splunk'],
      tcp: data['tcp'],
      http: data['http'],
    }));
});
