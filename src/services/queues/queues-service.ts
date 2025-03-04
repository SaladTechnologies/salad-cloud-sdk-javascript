import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { QueueList, queueListResponse } from './models/queue-list';
import { CreateQueue1, createQueue1Request } from './models/create-queue-1';
import { Queue, queueResponse } from './models/queue';
import { UpdateQueue1, updateQueue1Request } from './models/update-queue-1';
import { QueueJobList, queueJobListResponse } from './models/queue-job-list';
import { ListQueueJobsParams } from './request-params';
import { CreateQueueJob1, createQueueJob1Request } from './models/create-queue-job-1';
import { QueueJob, queueJobResponse } from './models/queue-job';

export class QueuesService extends BaseService {
  /**
   * Gets the list of queues in the given project.
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<QueueList>>} OK
   */
  async listQueues(
    organizationName: string,
    projectName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<QueueList>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues')
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: queueListResponse,
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
        key: 'project_name',
        value: projectName,
      })
      .build();
    return this.client.call<QueueList>(request);
  }

  /**
   * Creates a new queue in the given project.
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Queue>>} Created
   */
  async createQueue(
    organizationName: string,
    projectName: string,
    body: CreateQueue1,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Queue>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues')
      .setRequestSchema(createQueue1Request)
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: queueResponse,
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
        key: 'project_name',
        value: projectName,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Queue>(request);
  }

  /**
   * Gets an existing queue in the given project.
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} queueName - The queue name.
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Queue>>} OK
   */
  async getQueue(
    organizationName: string,
    projectName: string,
    queueName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Queue>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: queueResponse,
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
        key: 'project_name',
        value: projectName,
      })
      .addPathParam({
        key: 'queue_name',
        value: queueName,
      })
      .build();
    return this.client.call<Queue>(request);
  }

  /**
   * Updates an existing queue in the given project.
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} queueName - The queue name.
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<Queue>>} OK
   */
  async updateQueue(
    organizationName: string,
    projectName: string,
    queueName: string,
    body: UpdateQueue1,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Queue>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('PATCH')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}')
      .setRequestSchema(updateQueue1Request)
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: queueResponse,
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
        key: 'project_name',
        value: projectName,
      })
      .addPathParam({
        key: 'queue_name',
        value: queueName,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/merge-patch+json' })
      .addBody(body)
      .build();
    return this.client.call<Queue>(request);
  }

  /**
   * Deletes an existing queue in the given project.
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} queueName - The queue name.
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} Accepted
   */
  async deleteQueue(
    organizationName: string,
    projectName: string,
    queueName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('DELETE')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
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
        key: 'project_name',
        value: projectName,
      })
      .addPathParam({
        key: 'queue_name',
        value: queueName,
      })
      .build();
    return this.client.call<void>(request);
  }

  /**
   * Gets the list of jobs in a queue
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} queueName - The queue name.
   * @param {number} [params.page] - The page number.
   * @param {number} [params.pageSize] - The maximum number of items per page.
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<QueueJobList>>} OK
   */
  async listQueueJobs(
    organizationName: string,
    projectName: string,
    queueName: string,
    params?: ListQueueJobsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<QueueJobList>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}/jobs')
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: queueJobListResponse,
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
        key: 'project_name',
        value: projectName,
      })
      .addPathParam({
        key: 'queue_name',
        value: queueName,
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
    return this.client.call<QueueJobList>(request);
  }

  /**
   * Creates a new job
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} queueName - The queue name.
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<QueueJob>>} Created
   */
  async createQueueJob(
    organizationName: string,
    projectName: string,
    queueName: string,
    body: CreateQueueJob1,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<QueueJob>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}/jobs')
      .setRequestSchema(createQueueJob1Request)
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: queueJobResponse,
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
        key: 'project_name',
        value: projectName,
      })
      .addPathParam({
        key: 'queue_name',
        value: queueName,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<QueueJob>(request);
  }

  /**
   * Gets a job in a queue
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} queueName - The queue name.
   * @param {string} queueJobId - The job identifier. This is automatically generated and assigned when the job is created.
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<QueueJob>>} OK
   */
  async getQueueJob(
    organizationName: string,
    projectName: string,
    queueName: string,
    queueJobId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<QueueJob>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}/jobs/{queue_job_id}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: queueJobResponse,
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
        key: 'project_name',
        value: projectName,
      })
      .addPathParam({
        key: 'queue_name',
        value: queueName,
      })
      .addPathParam({
        key: 'queue_job_id',
        value: queueJobId,
      })
      .build();
    return this.client.call<QueueJob>(request);
  }

  /**
   * Cancels a job in a queue
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} queueName - The queue name.
   * @param {string} queueJobId - The job identifier. This is automatically generated and assigned when the job is created.
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} Accepted
   */
  async deleteQueueJob(
    organizationName: string,
    projectName: string,
    queueName: string,
    queueJobId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('DELETE')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}/jobs/{queue_job_id}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
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
        key: 'project_name',
        value: projectName,
      })
      .addPathParam({
        key: 'queue_name',
        value: queueName,
      })
      .addPathParam({
        key: 'queue_job_id',
        value: queueJobId,
      })
      .build();
    return this.client.call<void>(request);
  }
}
