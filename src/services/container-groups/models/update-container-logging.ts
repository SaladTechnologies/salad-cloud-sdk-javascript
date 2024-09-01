import { z } from 'zod';
import { loggingAxiom3, loggingAxiom3Request, loggingAxiom3Response } from './logging-axiom-3';
import { loggingDatadog3, loggingDatadog3Request, loggingDatadog3Response } from './logging-datadog-3';
import { loggingNewRelic3, loggingNewRelic3Request, loggingNewRelic3Response } from './logging-new-relic-3';
import { loggingSplunk3, loggingSplunk3Request, loggingSplunk3Response } from './logging-splunk-3';
import { loggingTcp3, loggingTcp3Request, loggingTcp3Response } from './logging-tcp-3';
import { loggingHttp3, loggingHttp3Request, loggingHttp3Response } from './logging-http-3';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateContainerLogging = z.lazy(() => {
  return z.object({
    axiom: loggingAxiom3.optional().nullable(),
    datadog: loggingDatadog3.optional().nullable(),
    newRelic: loggingNewRelic3.optional().nullable(),
    splunk: loggingSplunk3.optional().nullable(),
    tcp: loggingTcp3.optional().nullable(),
    http: loggingHttp3.optional().nullable(),
  });
});

/**
 *
 * @typedef  {UpdateContainerLogging} updateContainerLogging
 * @property {LoggingAxiom3}
 * @property {LoggingDatadog3}
 * @property {LoggingNewRelic3}
 * @property {LoggingSplunk3}
 * @property {LoggingTcp3}
 * @property {LoggingHttp3}
 */
export type UpdateContainerLogging = z.infer<typeof updateContainerLogging>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateContainerLoggingResponse = z.lazy(() => {
  return z
    .object({
      axiom: loggingAxiom3Response.optional().nullable(),
      datadog: loggingDatadog3Response.optional().nullable(),
      new_relic: loggingNewRelic3Response.optional().nullable(),
      splunk: loggingSplunk3Response.optional().nullable(),
      tcp: loggingTcp3Response.optional().nullable(),
      http: loggingHttp3Response.optional().nullable(),
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
export const updateContainerLoggingRequest = z.lazy(() => {
  return z
    .object({
      axiom: loggingAxiom3Request.nullish(),
      datadog: loggingDatadog3Request.nullish(),
      newRelic: loggingNewRelic3Request.nullish(),
      splunk: loggingSplunk3Request.nullish(),
      tcp: loggingTcp3Request.nullish(),
      http: loggingHttp3Request.nullish(),
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
