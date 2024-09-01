import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { WorkloadErrorList, workloadErrorListResponse } from './models/workload-error-list';

export class WorkloadErrorsService extends BaseService {
  /**
   * Gets the workload errors
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} containerGroupName - The unique container group name
   * @returns {Promise<HttpResponse<WorkloadErrorList>>} OK
   */
  async getWorkloadErrors(
    organizationName: string,
    projectName: string,
    containerGroupName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<WorkloadErrorList>> {
    const request = new RequestBuilder<WorkloadErrorList>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/errors')
      .setRequestSchema(z.any())
      .setResponseSchema(workloadErrorListResponse)
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
        key: 'container_group_name',
        value: containerGroupName,
      })
      .build();
    return this.client.call<WorkloadErrorList>(request);
  }
}
