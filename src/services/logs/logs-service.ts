import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { LogEntryQuery, logEntryQueryRequest } from './models/log-entry-query';
import { LogEntryCollection, logEntryCollectionResponse } from './models/log-entry-collection';
import { ProblemDetails } from '../common/problem-details';

/**
 * Service class for LogsService operations.
 * Provides methods to interact with LogsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class LogsService extends BaseService {
  /**
   * Retrieve a collection of _log entries_ for the _organization_ identified by `{organization_name}` matching the log query.
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<LogEntryCollection>>} - OK
   */
  async queryLogEntries(
    organizationName: string,
    body: LogEntryQuery,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<LogEntryCollection>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/organizations/{organization_name}/log-entries')
      .setRequestSchema(logEntryQueryRequest)
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: logEntryCollectionResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addError({
        error: ProblemDetails,
        contentType: ContentType.Json,
        status: 400,
      })
      .addError({
        error: ProblemDetails,
        contentType: ContentType.Json,
        status: 401,
      })
      .addError({
        error: ProblemDetails,
        contentType: ContentType.Json,
        status: 403,
      })
      .addError({
        error: ProblemDetails,
        contentType: ContentType.Json,
        status: 404,
      })
      .addError({
        error: ProblemDetails,
        contentType: ContentType.Json,
        status: 429,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'organization_name',
        value: organizationName,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<LogEntryCollection>(request);
  }
}
