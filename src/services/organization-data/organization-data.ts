import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { GpuClassesList, gpuClassesListResponse } from './models/gpu-classes-list';

export class OrganizationDataService extends BaseService {
  /**
   * List the GPU Classes
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @returns {Promise<HttpResponse<GpuClassesList>>} OK
   */
  async listGpuClasses(organizationName: string, requestConfig?: RequestConfig): Promise<HttpResponse<GpuClassesList>> {
    const request = new RequestBuilder<GpuClassesList>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/gpu-classes')
      .setRequestSchema(z.any())
      .setResponseSchema(gpuClassesListResponse)
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
    return this.client.call<GpuClassesList>(request);
  }
}
