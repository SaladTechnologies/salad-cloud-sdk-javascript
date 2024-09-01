import { z } from 'zod';
import { loggingAxiom1, loggingAxiom1Request, loggingAxiom1Response } from './logging-axiom-1';
import { loggingDatadog1, loggingDatadog1Request, loggingDatadog1Response } from './logging-datadog-1';
import { loggingNewRelic1, loggingNewRelic1Request, loggingNewRelic1Response } from './logging-new-relic-1';
import { loggingSplunk1, loggingSplunk1Request, loggingSplunk1Response } from './logging-splunk-1';
import { loggingTcp1, loggingTcp1Request, loggingTcp1Response } from './logging-tcp-1';
import { loggingHttp1, loggingHttp1Request, loggingHttp1Response } from './logging-http-1';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerLogging = z.lazy(() => {
  return z.object({
    axiom: loggingAxiom1.optional().nullable(),
    datadog: loggingDatadog1.optional().nullable(),
    newRelic: loggingNewRelic1.optional().nullable(),
    splunk: loggingSplunk1.optional().nullable(),
    tcp: loggingTcp1.optional().nullable(),
    http: loggingHttp1.optional().nullable(),
  });
});

/**
 *
 * @typedef  {ContainerLogging} containerLogging
 * @property {LoggingAxiom1}
 * @property {LoggingDatadog1}
 * @property {LoggingNewRelic1}
 * @property {LoggingSplunk1}
 * @property {LoggingTcp1}
 * @property {LoggingHttp1}
 */
export type ContainerLogging = z.infer<typeof containerLogging>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerLoggingResponse = z.lazy(() => {
  return z
    .object({
      axiom: loggingAxiom1Response.optional().nullable(),
      datadog: loggingDatadog1Response.optional().nullable(),
      new_relic: loggingNewRelic1Response.optional().nullable(),
      splunk: loggingSplunk1Response.optional().nullable(),
      tcp: loggingTcp1Response.optional().nullable(),
      http: loggingHttp1Response.optional().nullable(),
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
export const containerLoggingRequest = z.lazy(() => {
  return z
    .object({
      axiom: loggingAxiom1Request.nullish(),
      datadog: loggingDatadog1Request.nullish(),
      newRelic: loggingNewRelic1Request.nullish(),
      splunk: loggingSplunk1Request.nullish(),
      tcp: loggingTcp1Request.nullish(),
      http: loggingHttp1Request.nullish(),
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
