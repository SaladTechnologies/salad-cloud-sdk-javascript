import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GpuClassesList, gpuClassesListResponse } from './models/gpu-classes-list';
import { ProblemDetails } from '../common/problem-details';
import { CpuAvailabilityPrototype, cpuAvailabilityPrototypeRequest } from './models/cpu-availability-prototype';
import { CpuAvailability, cpuAvailabilityResponse } from './models/cpu-availability';
import { GpuAvailabilityPrototype, gpuAvailabilityPrototypeRequest } from './models/gpu-availability-prototype';
import { GpuAvailability, gpuAvailabilityResponse } from './models/gpu-availability';

export class OrganizationDataService extends BaseService {
  /**
   * List the GPU Classes
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GpuClassesList>>} - OK
   */
  async listGpuClasses(organizationName: string, requestConfig?: RequestConfig): Promise<HttpResponse<GpuClassesList>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/gpu-classes')
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: gpuClassesListResponse,
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
    return this.client.call<GpuClassesList>(request);
  }

  /**
   * Gets the CPU availability for the given organization
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<CpuAvailability>>} - Successfully retrieved CPU availability
   */
  async getCpuAvailability(
    organizationName: string,
    body: CpuAvailabilityPrototype,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CpuAvailability>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/organizations/{organization_name}/availability/sce-cpu-availability')
      .setRequestSchema(cpuAvailabilityPrototypeRequest)
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: cpuAvailabilityResponse,
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
    return this.client.call<CpuAvailability>(request);
  }

  /**
   * Gets the GPU availability for the given organization
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<GpuAvailability>>} - Successfully retrieved GPU availability
   */
  async getGpuAvailability(
    organizationName: string,
    body: GpuAvailabilityPrototype,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GpuAvailability>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/organizations/{organization_name}/availability/sce-gpu-availability')
      .setRequestSchema(gpuAvailabilityPrototypeRequest)
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: gpuAvailabilityResponse,
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
    return this.client.call<GpuAvailability>(request);
  }
}
