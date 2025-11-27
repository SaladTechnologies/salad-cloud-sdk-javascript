import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  InferenceEndpointCollection,
  inferenceEndpointCollectionResponse,
} from './models/inference-endpoint-collection';
import { ProblemDetails } from '../common/problem-details';
import { ListInferenceEndpointJobsParams, ListInferenceEndpointsParams } from './request-params';
import { InferenceEndpoint, inferenceEndpointResponse } from './models/inference-endpoint';
import {
  InferenceEndpointJobCollection,
  inferenceEndpointJobCollectionResponse,
} from './models/inference-endpoint-job-collection';
import {
  InferenceEndpointJobPrototype,
  inferenceEndpointJobPrototypeRequest,
} from './models/inference-endpoint-job-prototype';
import { InferenceEndpointJob, inferenceEndpointJobResponse } from './models/inference-endpoint-job';

export class InferenceEndpointsService extends BaseService {
  /**
   * Lists inference endpoints.
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {number} [params.page] - The page number.
   * @param {number} [params.pageSize] - The maximum number of items per page.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<InferenceEndpointCollection>>} - OK
   */
  async listInferenceEndpoints(
    organizationName: string,
    params?: ListInferenceEndpointsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<InferenceEndpointCollection>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/inference-endpoints')
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: inferenceEndpointCollectionResponse,
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
      .addQueryParam({
        key: 'page',
        value: params?.page,
      })
      .addQueryParam({
        key: 'page_size',
        value: params?.pageSize,
      })
      .build();
    return this.client.call<InferenceEndpointCollection>(request);
  }

  /**
   * Gets an inference endpoint.
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} inferenceEndpointName - The inference endpoint name.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<InferenceEndpoint>>} - OK
   */
  async getInferenceEndpoint(
    organizationName: string,
    inferenceEndpointName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<InferenceEndpoint>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: inferenceEndpointResponse,
        contentType: ContentType.Json,
        status: 200,
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
      .addPathParam({
        key: 'inference_endpoint_name',
        value: inferenceEndpointName,
      })
      .build();
    return this.client.call<InferenceEndpoint>(request);
  }

  /**
   * Lists inference endpoint jobs.
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} inferenceEndpointName - The inference endpoint name.
   * @param {number} [params.page] - The page number.
   * @param {number} [params.pageSize] - The maximum number of items per page.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<InferenceEndpointJobCollection>>} - OK
   */
  async listInferenceEndpointJobs(
    organizationName: string,
    inferenceEndpointName: string,
    params?: ListInferenceEndpointJobsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<InferenceEndpointJobCollection>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs')
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: inferenceEndpointJobCollectionResponse,
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
      .addPathParam({
        key: 'inference_endpoint_name',
        value: inferenceEndpointName,
      })
      .addQueryParam({
        key: 'page',
        value: params?.page,
      })
      .addQueryParam({
        key: 'page_size',
        value: params?.pageSize,
      })
      .build();
    return this.client.call<InferenceEndpointJobCollection>(request);
  }

  /**
   * Creates a new inference endpoint job.
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} inferenceEndpointName - The inference endpoint name.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<InferenceEndpointJob>>} - Created
   */
  async createInferenceEndpointJob(
    organizationName: string,
    inferenceEndpointName: string,
    body: InferenceEndpointJobPrototype,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<InferenceEndpointJob>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs')
      .setRequestSchema(inferenceEndpointJobPrototypeRequest)
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: inferenceEndpointJobResponse,
        contentType: ContentType.Json,
        status: 201,
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
      .addPathParam({
        key: 'inference_endpoint_name',
        value: inferenceEndpointName,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<InferenceEndpointJob>(request);
  }

  /**
   * Gets an inference endpoint job.
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} inferenceEndpointName - The inference endpoint name.
   * @param {string} inferenceEndpointJobId - The inference endpoint job identifier.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<InferenceEndpointJob>>} - OK
   */
  async getInferenceEndpointJob(
    organizationName: string,
    inferenceEndpointName: string,
    inferenceEndpointJobId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<InferenceEndpointJob>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath(
        '/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs/{inference_endpoint_job_id}',
      )
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: inferenceEndpointJobResponse,
        contentType: ContentType.Json,
        status: 200,
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
      .addPathParam({
        key: 'inference_endpoint_name',
        value: inferenceEndpointName,
      })
      .addPathParam({
        key: 'inference_endpoint_job_id',
        value: inferenceEndpointJobId,
      })
      .build();
    return this.client.call<InferenceEndpointJob>(request);
  }

  /**
   * Cancels an inference endpoint job.
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} inferenceEndpointName - The inference endpoint name.
   * @param {string} inferenceEndpointJobId - The inference endpoint job identifier.
   * @param {RequestConfig} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - Accepted
   */
  async deleteInferenceEndpointJob(
    organizationName: string,
    inferenceEndpointName: string,
    inferenceEndpointJobId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('DELETE')
      .setPath(
        '/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs/{inference_endpoint_job_id}',
      )
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 202,
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
      .addPathParam({
        key: 'inference_endpoint_name',
        value: inferenceEndpointName,
      })
      .addPathParam({
        key: 'inference_endpoint_job_id',
        value: inferenceEndpointJobId,
      })
      .build();
    return this.client.call<void>(request);
  }
}
