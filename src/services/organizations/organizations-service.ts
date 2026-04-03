import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { CpuAvailabilityPrototype, cpuAvailabilityPrototypeRequest } from './models/cpu-availability-prototype';
import { CpuAvailability, cpuAvailabilityResponse } from './models/cpu-availability';
import { ProblemDetails } from '../common/problem-details';
import { GpuAvailabilityPrototype, gpuAvailabilityPrototypeRequest } from './models/gpu-availability-prototype';
import { GpuAvailability, gpuAvailabilityResponse } from './models/gpu-availability';

/**
 * Service class for OrganizationsService operations.
 * Provides methods to interact with OrganizationsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class OrganizationsService extends BaseService {
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
