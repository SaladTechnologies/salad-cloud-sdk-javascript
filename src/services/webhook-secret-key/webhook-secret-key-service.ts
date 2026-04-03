import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { WebhookSecretKey, webhookSecretKeyResponse } from './models/webhook-secret-key';
import { ProblemDetails } from '../common/problem-details';

/**
 * Service class for WebhookSecretKeyService operations.
 * Provides methods to interact with WebhookSecretKeyService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class WebhookSecretKeyService extends BaseService {
  /**
   * Gets the webhook secret key
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<WebhookSecretKey>>} - OK
   */
  async getWebhookSecretKey(
    organizationName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<WebhookSecretKey>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/webhook-secret-key')
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: webhookSecretKeyResponse,
        contentType: ContentType.Json,
        status: 200,
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
      .build();
    return this.client.call<WebhookSecretKey>(request);
  }

  /**
   * Updates the webhook secret key
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<WebhookSecretKey>>} - OK
   */
  async updateWebhookSecretKey(
    organizationName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<WebhookSecretKey>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/organizations/{organization_name}/webhook-secret-key')
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: webhookSecretKeyResponse,
        contentType: ContentType.Json,
        status: 200,
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
      .build();
    return this.client.call<WebhookSecretKey>(request);
  }
}
