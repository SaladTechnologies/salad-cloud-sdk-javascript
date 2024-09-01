import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { QueueList, queueListResponse } from './models/queue-list';
import { CreateQueue, createQueueRequest } from './models/create-queue';
import { Queue, queueResponse } from './models/queue';
import { UpdateQueue, updateQueueRequest } from './models/update-queue';
import { QueueJobList, queueJobListResponse } from './models/queue-job-list';
import { ListQueueJobsParams } from './request-params';
import { CreateQueueJob, createQueueJobRequest } from './models/create-queue-job';
import { QueueJob, queueJobResponse } from './models/queue-job';

export class QueuesService extends BaseService {
  /**
   * Gets the list of queues
   * @param {string} organizationName - The unique organization name
   * @param {string} projectName - The unique project name
   * @returns {Promise<HttpResponse<QueueList>>} OK
   */
  async listQueues(
    organizationName: string,
    projectName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<QueueList>> {
    const request = new RequestBuilder<QueueList>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues')
      .setRequestSchema(z.any())
      .setResponseSchema(queueListResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
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
   * Creates a new queue
   * @param {string} organizationName - The unique organization name
   * @param {string} projectName - The unique project name
   * @returns {Promise<HttpResponse<Queue>>} Created
   */
  async createQueue(
    organizationName: string,
    projectName: string,
    body: CreateQueue,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Queue>> {
    const request = new RequestBuilder<Queue>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues')
      .setRequestSchema(createQueueRequest)
      .setResponseSchema(queueResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
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
   * Gets a queue
   * @param {string} organizationName - The unique organization name
   * @param {string} projectName - The unique project name
   * @param {string} queueName - The unique queue name
   * @returns {Promise<HttpResponse<Queue>>} OK
   */
  async getQueue(
    organizationName: string,
    projectName: string,
    queueName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Queue>> {
    const request = new RequestBuilder<Queue>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}')
      .setRequestSchema(z.any())
      .setResponseSchema(queueResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
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
   * Updates a queue
   * @param {string} organizationName - The unique organization name
   * @param {string} projectName - The unique project name
   * @param {string} queueName - The unique queue name
   * @returns {Promise<HttpResponse<Queue>>} OK
   */
  async updateQueue(
    organizationName: string,
    projectName: string,
    queueName: string,
    body: UpdateQueue,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<Queue>> {
    const request = new RequestBuilder<Queue>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('PATCH')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}')
      .setRequestSchema(updateQueueRequest)
      .setResponseSchema(queueResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
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
   * Deletes a queue
   * @param {string} organizationName - The unique organization name
   * @param {string} projectName - The unique project name
   * @param {string} queueName - The unique queue name
   * @returns {Promise<HttpResponse<any>>} Accepted
   */
  async deleteQueue(
    organizationName: string,
    projectName: string,
    queueName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<undefined>> {
    const request = new RequestBuilder<undefined>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('DELETE')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}')
      .setRequestSchema(z.any())
      .setResponseSchema(z.undefined())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
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
    return this.client.call<undefined>(request);
  }

  /**
   * Retrieves a list of queue jobs
   * @param {string} organizationName - The unique organization name
   * @param {string} projectName - The unique project name
   * @param {string} queueName - The unique queue name
   * @param {number} [page] - The page number
   * @param {number} [pageSize] - The number of items per page
   * @returns {Promise<HttpResponse<QueueJobList>>} OK
   */
  async listQueueJobs(
    organizationName: string,
    projectName: string,
    queueName: string,
    params?: ListQueueJobsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<QueueJobList>> {
    const request = new RequestBuilder<QueueJobList>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}/jobs')
      .setRequestSchema(z.any())
      .setResponseSchema(queueJobListResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
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
   * @param {string} organizationName - The unique organization name
   * @param {string} projectName - The unique project name
   * @param {string} queueName - The unique queue name
   * @returns {Promise<HttpResponse<QueueJob>>} Created
   */
  async createQueueJob(
    organizationName: string,
    projectName: string,
    queueName: string,
    body: CreateQueueJob,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<QueueJob>> {
    const request = new RequestBuilder<QueueJob>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}/jobs')
      .setRequestSchema(createQueueJobRequest)
      .setResponseSchema(queueJobResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
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
   * Retrieves a job in a queue
   * @param {string} organizationName - The unique organization name
   * @param {string} projectName - The unique project name
   * @param {string} queueName - The unique queue name
   * @param {string} queueJobId - The unique job id
   * @returns {Promise<HttpResponse<QueueJob>>} OK
   */
  async getQueueJob(
    organizationName: string,
    projectName: string,
    queueName: string,
    queueJobId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<QueueJob>> {
    const request = new RequestBuilder<QueueJob>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}/jobs/{queue_job_id}')
      .setRequestSchema(z.any())
      .setResponseSchema(queueJobResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
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
   * Deletes a queue job
   * @param {string} organizationName - The unique organization name
   * @param {string} projectName - The unique project name
   * @param {string} queueName - The unique queue name
   * @param {string} queueJobId - The unique job id
   * @returns {Promise<HttpResponse<any>>} Accepted
   */
  async deleteQueueJob(
    organizationName: string,
    projectName: string,
    queueName: string,
    queueJobId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<undefined>> {
    const request = new RequestBuilder<undefined>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('DELETE')
      .setPath('/organizations/{organization_name}/projects/{project_name}/queues/{queue_name}/jobs/{queue_job_id}')
      .setRequestSchema(z.any())
      .setResponseSchema(z.undefined())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
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
    return this.client.call<undefined>(request);
  }
}
