import { z } from 'zod';
import {
  AxiomLoggingConfiguration,
  axiomLoggingConfiguration,
  axiomLoggingConfigurationRequest,
  axiomLoggingConfigurationResponse,
} from './axiom-logging-configuration';
import {
  DatadogLoggingConfiguration,
  datadogLoggingConfiguration,
  datadogLoggingConfigurationRequest,
  datadogLoggingConfigurationResponse,
} from './datadog-logging-configuration';
import {
  ContainerLoggingConfigurationHttp1,
  containerLoggingConfigurationHttp1,
  containerLoggingConfigurationHttp1Request,
  containerLoggingConfigurationHttp1Response,
} from './container-logging-configuration-http-1';
import {
  NewRelicLoggingConfiguration,
  newRelicLoggingConfiguration,
  newRelicLoggingConfigurationRequest,
  newRelicLoggingConfigurationResponse,
} from './new-relic-logging-configuration';
import {
  ContainerLoggingSplunkConfiguration,
  containerLoggingSplunkConfiguration,
  containerLoggingSplunkConfigurationRequest,
  containerLoggingSplunkConfigurationResponse,
} from './container-logging-splunk-configuration';
import {
  TcpLoggingConfiguration,
  tcpLoggingConfiguration,
  tcpLoggingConfigurationRequest,
  tcpLoggingConfigurationResponse,
} from './tcp-logging-configuration';

/**
 * Zod schema for the UpdateContainerLogging model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateContainerLogging = z.lazy(() => {
  return z.object({
    axiom: axiomLoggingConfiguration.optional(),
    datadog: datadogLoggingConfiguration.optional(),
    http: containerLoggingConfigurationHttp1.optional(),
    newRelic: newRelicLoggingConfiguration.optional(),
    splunk: containerLoggingSplunkConfiguration.optional(),
    tcp: tcpLoggingConfiguration.optional(),
  });
});

/**
 * Configuration options for directing container logs to a logging provider. This schema enables you to specify a single logging destination for container output, supporting monitoring, debugging, and analytics use cases. Each provider has its own configuration parameters defined in the referenced schemas. Only one logging provider can be selected at a time.
 * @typedef  {UpdateContainerLogging} updateContainerLogging - Configuration options for directing container logs to a logging provider. This schema enables you to specify a single logging destination for container output, supporting monitoring, debugging, and analytics use cases. Each provider has its own configuration parameters defined in the referenced schemas. Only one logging provider can be selected at a time. - Configuration options for directing container logs to a logging provider. This schema enables you to specify a single logging destination for container output, supporting monitoring, debugging, and analytics use cases. Each provider has its own configuration parameters defined in the referenced schemas. Only one logging provider can be selected at a time.
 * @property {AxiomLoggingConfiguration} - Configuration settings for integrating container logs with the Axiom logging service. When specified, container logs will be forwarded to the Axiom instance defined by these parameters.
 * @property {DatadogLoggingConfiguration} - Configuration for forwarding container logs to Datadog monitoring service.
 * @property {ContainerLoggingConfigurationHttp1} - Configuration for sending container logs to an HTTP endpoint. Defines how logs are formatted, compressed, and transmitted.
 * @property {NewRelicLoggingConfiguration} - Configuration for sending container logs to New Relic's log management platform.
 * @property {ContainerLoggingSplunkConfiguration} - Configuration settings for forwarding container logs to a Splunk instance.
 * @property {TcpLoggingConfiguration} - Configuration for forwarding container logs to a remote TCP endpoint
 */
export type UpdateContainerLogging = z.infer<typeof updateContainerLogging>;

/**
 * Zod schema for mapping API responses to the UpdateContainerLogging application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateContainerLoggingResponse = z.lazy(() => {
  return z
    .object({
      axiom: axiomLoggingConfigurationResponse.optional(),
      datadog: datadogLoggingConfigurationResponse.optional(),
      http: containerLoggingConfigurationHttp1Response.optional(),
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
 * Zod schema for mapping the UpdateContainerLogging application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateContainerLoggingRequest = z.lazy(() => {
  return z
    .object({
      axiom: axiomLoggingConfigurationRequest.optional(),
      datadog: datadogLoggingConfigurationRequest.optional(),
      http: containerLoggingConfigurationHttp1Request.optional(),
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
