import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { WebhookSecretKey, webhookSecretKeyResponse } from './models/webhook-secret-key';

export class WebhookSecretKeyService extends BaseService {
  /**
   * Gets the webhook secret key
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @returns {Promise<HttpResponse<WebhookSecretKey>>} OK
   */
  async getWebhookSecretKey(
    organizationName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<WebhookSecretKey>> {
    const request = new RequestBuilder<WebhookSecretKey>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/webhook-secret-key')
      .setRequestSchema(z.any())
      .setResponseSchema(webhookSecretKeyResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
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
   * @returns {Promise<HttpResponse<WebhookSecretKey>>} OK
   */
  async updateWebhookSecretKey(
    organizationName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<WebhookSecretKey>> {
    const request = new RequestBuilder<WebhookSecretKey>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/organizations/{organization_name}/webhook-secret-key')
      .setRequestSchema(z.any())
      .setResponseSchema(webhookSecretKeyResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
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
