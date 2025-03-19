import { z } from 'zod';
import {
  axiomLoggingConfiguration,
  axiomLoggingConfigurationRequest,
  axiomLoggingConfigurationResponse,
} from './axiom-logging-configuration';
import {
  datadogLoggingConfiguration,
  datadogLoggingConfigurationRequest,
  datadogLoggingConfigurationResponse,
} from './datadog-logging-configuration';
import {
  containerHttpLoggingConfiguration,
  containerHttpLoggingConfigurationRequest,
  containerHttpLoggingConfigurationResponse,
} from './container-http-logging-configuration';
import {
  newRelicLoggingConfiguration,
  newRelicLoggingConfigurationRequest,
  newRelicLoggingConfigurationResponse,
} from './new-relic-logging-configuration';
import {
  containerLoggingSplunkConfiguration,
  containerLoggingSplunkConfigurationRequest,
  containerLoggingSplunkConfigurationResponse,
} from './container-logging-splunk-configuration';
import {
  tcpLoggingConfiguration,
  tcpLoggingConfigurationRequest,
  tcpLoggingConfigurationResponse,
} from './tcp-logging-configuration';

/**
 * The shape of the model inside the application code - what the users use
 */
export const containerLoggingConfiguration = z.lazy(() => {
  return z.object({
    axiom: axiomLoggingConfiguration.optional(),
    datadog: datadogLoggingConfiguration.optional(),
    http: containerHttpLoggingConfiguration.optional(),
    newRelic: newRelicLoggingConfiguration.optional(),
    splunk: containerLoggingSplunkConfiguration.optional(),
    tcp: tcpLoggingConfiguration.optional(),
  });
});

/**
 * Configuration options for directing container logs to a logging provider. This schema enables you to specify a single logging destination for container output, supporting monitoring, debugging, and analytics use cases. Each provider has its own configuration parameters defined in the referenced schemas. Only one logging provider can be selected at a time.
 * @typedef  {ContainerLoggingConfiguration} containerLoggingConfiguration - Configuration options for directing container logs to a logging provider. This schema enables you to specify a single logging destination for container output, supporting monitoring, debugging, and analytics use cases. Each provider has its own configuration parameters defined in the referenced schemas. Only one logging provider can be selected at a time. - Configuration options for directing container logs to a logging provider. This schema enables you to specify a single logging destination for container output, supporting monitoring, debugging, and analytics use cases. Each provider has its own configuration parameters defined in the referenced schemas. Only one logging provider can be selected at a time.
 * @property {AxiomLoggingConfiguration} - Configuration settings for integrating container logs with the Axiom logging service. When specified, container logs will be forwarded to the Axiom instance defined by these parameters.
 * @property {DatadogLoggingConfiguration} - Configuration for forwarding container logs to Datadog monitoring service.
 * @property {ContainerHttpLoggingConfiguration} - Configuration for sending container logs to an HTTP endpoint. Defines how logs are formatted, compressed, and transmitted.
 * @property {NewRelicLoggingConfiguration} - Configuration for sending container logs to New Relic's log management platform.
 * @property {ContainerLoggingSplunkConfiguration} - Configuration settings for forwarding container logs to a Splunk instance.
 * @property {TcpLoggingConfiguration} - Configuration for forwarding container logs to a remote TCP endpoint
 */
export type ContainerLoggingConfiguration = z.infer<typeof containerLoggingConfiguration>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const containerLoggingConfigurationResponse = z.lazy(() => {
  return z
    .object({
      axiom: axiomLoggingConfigurationResponse.optional(),
      datadog: datadogLoggingConfigurationResponse.optional(),
      http: containerHttpLoggingConfigurationResponse.optional(),
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
export const containerLoggingConfigurationRequest = z.lazy(() => {
  return z
    .object({
      axiom: axiomLoggingConfigurationRequest.optional(),
      datadog: datadogLoggingConfigurationRequest.optional(),
      http: containerHttpLoggingConfigurationRequest.optional(),
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
