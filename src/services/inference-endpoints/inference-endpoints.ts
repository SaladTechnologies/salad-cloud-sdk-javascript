import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { InferenceEndpointsList, inferenceEndpointsListResponse } from './models/inference-endpoints-list';
import { GetInferenceEndpointJobsParams, ListInferenceEndpointsParams } from './request-params';
import { InferenceEndpoint, inferenceEndpointResponse } from './models/inference-endpoint';
import { InferenceEndpointJobList, inferenceEndpointJobListResponse } from './models/inference-endpoint-job-list';
import { CreateInferenceEndpointJob, createInferenceEndpointJobRequest } from './models/create-inference-endpoint-job';
import { InferenceEndpointJob, inferenceEndpointJobResponse } from './models/inference-endpoint-job';

export class InferenceEndpointsService extends BaseService {
  /**
   * Gets the list of inference endpoints
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {number} [page] - The page number
   * @param {number} [pageSize] - The number of items per page
   * @returns {Promise<HttpResponse<InferenceEndpointsList>>} OK
   */
  async listInferenceEndpoints(
    organizationName: string,
    params?: ListInferenceEndpointsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<InferenceEndpointsList>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/inference-endpoints')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: inferenceEndpointsListResponse,
        contentType: ContentType.Json,
        status: 200,
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
    return this.client.call<InferenceEndpointsList>(request);
  }

  /**
   * Gets an inference endpoint
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} inferenceEndpointName - The unique inference endpoint name
   * @returns {Promise<HttpResponse<InferenceEndpoint>>} OK
   */
  async getInferenceEndpoint(
    organizationName: string,
    inferenceEndpointName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<InferenceEndpoint>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: inferenceEndpointResponse,
        contentType: ContentType.Json,
        status: 200,
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
   * Retrieves a list of an inference endpoint jobs
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} inferenceEndpointName - The unique inference endpoint name
   * @param {number} [page] - The page number
   * @param {number} [pageSize] - The number of items per page
   * @returns {Promise<HttpResponse<InferenceEndpointJobList>>} OK
   */
  async getInferenceEndpointJobs(
    organizationName: string,
    inferenceEndpointName: string,
    params?: GetInferenceEndpointJobsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<InferenceEndpointJobList>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs')
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: inferenceEndpointJobListResponse,
        contentType: ContentType.Json,
        status: 200,
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
    return this.client.call<InferenceEndpointJobList>(request);
  }

  /**
   * Creates a new job
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} inferenceEndpointName - The unique inference endpoint name
   * @returns {Promise<HttpResponse<InferenceEndpointJob>>} Created
   */
  async createInferenceEndpointJob(
    organizationName: string,
    inferenceEndpointName: string,
    body: CreateInferenceEndpointJob,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<InferenceEndpointJob>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs')
      .setRequestSchema(createInferenceEndpointJobRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: inferenceEndpointJobResponse,
        contentType: ContentType.Json,
        status: 201,
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
   * Retrieves a job in an inference endpoint
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} inferenceEndpointName - The unique inference endpoint name
   * @param {string} inferenceEndpointJobId - The unique job id
   * @returns {Promise<HttpResponse<InferenceEndpointJob>>} Ok
   */
  async getInferenceEndpointJob(
    organizationName: string,
    inferenceEndpointName: string,
    inferenceEndpointJobId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<InferenceEndpointJob>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath(
        '/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs/{inference_endpoint_job_id}',
      )
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: inferenceEndpointJobResponse,
        contentType: ContentType.Json,
        status: 200,
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
   * Deletes an inference endpoint job
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} inferenceEndpointName - The unique inference endpoint name
   * @param {string} inferenceEndpointJobId - The unique job id
   * @returns {Promise<HttpResponse<any>>} Accepted
   */
  async deleteInferenceEndpointJob(
    organizationName: string,
    inferenceEndpointName: string,
    inferenceEndpointJobId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('DELETE')
      .setPath(
        '/organizations/{organization_name}/inference-endpoints/{inference_endpoint_name}/jobs/{inference_endpoint_job_id}',
      )
      .setRequestSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 202,
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
