import { z } from 'zod';
import {
  AxiomLoggingConfiguration,
  axiomLoggingConfiguration,
  axiomLoggingConfigurationRequest,
  axiomLoggingConfigurationResponse,
} from '../../common/axiom-logging-configuration';
import {
  DatadogLoggingConfiguration,
  datadogLoggingConfiguration,
  datadogLoggingConfigurationRequest,
  datadogLoggingConfigurationResponse,
} from '../../common/datadog-logging-configuration';
import {
  ContainerLoggingConfigurationHttp2,
  containerLoggingConfigurationHttp2,
  containerLoggingConfigurationHttp2Request,
  containerLoggingConfigurationHttp2Response,
} from './container-logging-configuration-http-2';
import {
  NewRelicLoggingConfiguration,
  newRelicLoggingConfiguration,
  newRelicLoggingConfigurationRequest,
  newRelicLoggingConfigurationResponse,
} from '../../common/new-relic-logging-configuration';
import {
  ContainerLoggingSplunkConfiguration,
  containerLoggingSplunkConfiguration,
  containerLoggingSplunkConfigurationRequest,
  containerLoggingSplunkConfigurationResponse,
} from '../../common/container-logging-splunk-configuration';
import {
  TcpLoggingConfiguration,
  tcpLoggingConfiguration,
  tcpLoggingConfigurationRequest,
  tcpLoggingConfigurationResponse,
} from '../../common/tcp-logging-configuration';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerConfigurationLogging = z.lazy(() => {
  return z.object({
    axiom: axiomLoggingConfiguration.optional(),
    datadog: datadogLoggingConfiguration.optional(),
    http: containerLoggingConfigurationHttp2.optional(),
    newRelic: newRelicLoggingConfiguration.optional(),
    splunk: containerLoggingSplunkConfiguration.optional(),
    tcp: tcpLoggingConfiguration.optional(),
  });
});

/**
 * Configuration options for directing container logs to a logging provider. This schema enables you to specify a single logging destination for container output, supporting monitoring, debugging, and analytics use cases. Each provider has its own configuration parameters defined in the referenced schemas. Only one logging provider can be selected at a time.
 * @typedef  {ContainerConfigurationLogging} containerConfigurationLogging - Configuration options for directing container logs to a logging provider. This schema enables you to specify a single logging destination for container output, supporting monitoring, debugging, and analytics use cases. Each provider has its own configuration parameters defined in the referenced schemas. Only one logging provider can be selected at a time. - Configuration options for directing container logs to a logging provider. This schema enables you to specify a single logging destination for container output, supporting monitoring, debugging, and analytics use cases. Each provider has its own configuration parameters defined in the referenced schemas. Only one logging provider can be selected at a time.
 * @property {AxiomLoggingConfiguration} - Configuration settings for integrating container logs with the Axiom logging service. When specified, container logs will be forwarded to the Axiom instance defined by these parameters.
 * @property {DatadogLoggingConfiguration} - Configuration for forwarding container logs to Datadog monitoring service.
 * @property {ContainerLoggingConfigurationHttp2} - Configuration for sending container logs to an HTTP endpoint. Defines how logs are formatted, compressed, and transmitted.
 * @property {NewRelicLoggingConfiguration} - Configuration for sending container logs to New Relic's log management platform.
 * @property {ContainerLoggingSplunkConfiguration} - Configuration settings for forwarding container logs to a Splunk instance.
 * @property {TcpLoggingConfiguration} - Configuration for forwarding container logs to a remote TCP endpoint
 */
export type ContainerConfigurationLogging = z.infer<typeof containerConfigurationLogging>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerConfigurationLoggingResponse = z.lazy(() => {
  return z
    .object({
      axiom: axiomLoggingConfigurationResponse.optional(),
      datadog: datadogLoggingConfigurationResponse.optional(),
      http: containerLoggingConfigurationHttp2Response.optional(),
      new_relic: newRelicLoggingConfigurationResponse.optional(),
      splunk: containerLoggingSplunkConfigurationResponse.optional(),
      tcp: tcpLoggingConfigurationResponse.optional(),
    })
    .transform((data) => ({
      axiom: data['axiom'],
      datadog: data['datadog'],
      http: data['http'],
      newRelic: data['new_relic'],
      splunk: data['splunk'],
      tcp: data['tcp'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const containerConfigurationLoggingRequest = z.lazy(() => {
  return z
    .object({
      axiom: axiomLoggingConfigurationRequest.optional(),
      datadog: datadogLoggingConfigurationRequest.optional(),
      http: containerLoggingConfigurationHttp2Request.optional(),
      newRelic: newRelicLoggingConfigurationRequest.optional(),
      splunk: containerLoggingSplunkConfigurationRequest.optional(),
      tcp: tcpLoggingConfigurationRequest.optional(),
    })
    .transform((data) => ({
      axiom: data['axiom'],
      datadog: data['datadog'],
      http: data['http'],
      new_relic: data['newRelic'],
      splunk: data['splunk'],
      tcp: data['tcp'],
    }));
});
