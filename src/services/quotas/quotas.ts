import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { Quotas, quotasResponse } from './models/quotas';

export class QuotasService extends BaseService {
  /**
   * Gets the organization quotas
   * @param {string} organizationName - The unique organization name
   * @returns {Promise<HttpResponse<Quotas>>} OK
   */
  async getQuotas(organizationName: string, requestConfig?: RequestConfig): Promise<HttpResponse<Quotas>> {
    const request = new RequestBuilder<Quotas>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/quotas')
      .setRequestSchema(z.any())
      .setResponseSchema(quotasResponse)
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
    return this.client.call<Quotas>(request);
  }
}
