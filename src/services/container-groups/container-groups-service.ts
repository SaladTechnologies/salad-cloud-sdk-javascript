import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ContainerGroupList, containerGroupListResponse } from './models/container-group-list';
import { CreateContainerGroup1, createContainerGroup1Request } from './models/create-container-group-1';
import { ContainerGroup, containerGroupResponse } from '../common/container-group';
import { UpdateContainerGroup1, updateContainerGroup1Request } from './models/update-container-group-1';
import { ContainerGroupInstances, containerGroupInstancesResponse } from './models/container-group-instances';
import { ContainerGroupInstance, containerGroupInstanceResponse } from './models/container-group-instance';

export class ContainerGroupsService extends BaseService {
  /**
   * Gets the list of container groups
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ContainerGroupList>>} OK
   */
  async listContainerGroups(
    organizationName: string,
    projectName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ContainerGroupList>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/projects/{project_name}/containers')
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: containerGroupListResponse,
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
    return this.client.call<ContainerGroupList>(request);
  }

  /**
   * Creates a new container group
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ContainerGroup>>} Created
   */
  async createContainerGroup(
    organizationName: string,
    projectName: string,
    body: CreateContainerGroup1,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ContainerGroup>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/organizations/{organization_name}/projects/{project_name}/containers')
      .setRequestSchema(createContainerGroup1Request)
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: containerGroupResponse,
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
    return this.client.call<ContainerGroup>(request);
  }

  /**
   * Gets a container group
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} containerGroupName - The unique container group name
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ContainerGroup>>} OK
   */
  async getContainerGroup(
    organizationName: string,
    projectName: string,
    containerGroupName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ContainerGroup>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}')
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: containerGroupResponse,
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
        key: 'container_group_name',
        value: containerGroupName,
      })
      .build();
    return this.client.call<ContainerGroup>(request);
  }

  /**
   * Updates a container group
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} containerGroupName - The unique container group name
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ContainerGroup>>} OK
   */
  async updateContainerGroup(
    organizationName: string,
    projectName: string,
    containerGroupName: string,
    body: UpdateContainerGroup1,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ContainerGroup>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('PATCH')
      .setPath('/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}')
      .setRequestSchema(updateContainerGroup1Request)
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: containerGroupResponse,
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
        key: 'container_group_name',
        value: containerGroupName,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/merge-patch+json' })
      .addBody(body)
      .build();
    return this.client.call<ContainerGroup>(request);
  }

  /**
   * Deletes a container group
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} containerGroupName - The unique container group name
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} Accepted
   */
  async deleteContainerGroup(
    organizationName: string,
    projectName: string,
    containerGroupName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('DELETE')
      .setPath('/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}')
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
        key: 'container_group_name',
        value: containerGroupName,
      })
      .build();
    return this.client.call<void>(request);
  }

  /**
   * Starts a container group
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} containerGroupName - The unique container group name
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} Accepted
   */
  async startContainerGroup(
    organizationName: string,
    projectName: string,
    containerGroupName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/start')
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
        key: 'container_group_name',
        value: containerGroupName,
      })
      .build();
    return this.client.call<void>(request);
  }

  /**
   * Stops a container group
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} containerGroupName - The unique container group name
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} Accepted
   */
  async stopContainerGroup(
    organizationName: string,
    projectName: string,
    containerGroupName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/stop')
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
        key: 'container_group_name',
        value: containerGroupName,
      })
      .build();
    return this.client.call<void>(request);
  }

  /**
   * Gets the list of container group instances
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} containerGroupName - The unique container group name
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ContainerGroupInstances>>} OK
   */
  async listContainerGroupInstances(
    organizationName: string,
    projectName: string,
    containerGroupName: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ContainerGroupInstances>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances')
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: containerGroupInstancesResponse,
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
        key: 'container_group_name',
        value: containerGroupName,
      })
      .build();
    return this.client.call<ContainerGroupInstances>(request);
  }

  /**
   * Gets a container group instance
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} containerGroupName - The unique container group name
   * @param {string} containerGroupInstanceId - The unique instance identifier
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<ContainerGroupInstance>>} OK
   */
  async getContainerGroupInstance(
    organizationName: string,
    projectName: string,
    containerGroupName: string,
    containerGroupInstanceId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ContainerGroupInstance>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath(
        '/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances/{container_group_instance_id}',
      )
      .setRequestSchema(z.any())
      .addApiKeyAuth(this.config.apiKey, 'Salad-Api-Key')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: containerGroupInstanceResponse,
        contentType: ContentType.Json,
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
        key: 'container_group_name',
        value: containerGroupName,
      })
      .addPathParam({
        key: 'container_group_instance_id',
        value: containerGroupInstanceId,
      })
      .build();
    return this.client.call<ContainerGroupInstance>(request);
  }

  /**
   * Reallocates a container group instance to run on a different Salad Node
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} containerGroupName - The unique container group name
   * @param {string} containerGroupInstanceId - The unique instance identifier
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} Accepted
   */
  async reallocateContainerGroupInstance(
    organizationName: string,
    projectName: string,
    containerGroupName: string,
    containerGroupInstanceId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath(
        '/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances/{container_group_instance_id}/reallocate',
      )
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
        key: 'container_group_name',
        value: containerGroupName,
      })
      .addPathParam({
        key: 'container_group_instance_id',
        value: containerGroupInstanceId,
      })
      .build();
    return this.client.call<void>(request);
  }

  /**
   * Stops a container, destroys it, and starts a new one without requiring the image to be downloaded again on a new Salad Node
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} containerGroupName - The unique container group name
   * @param {string} containerGroupInstanceId - The unique instance identifier
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} Accepted
   */
  async recreateContainerGroupInstance(
    organizationName: string,
    projectName: string,
    containerGroupName: string,
    containerGroupInstanceId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath(
        '/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances/{container_group_instance_id}/recreate',
      )
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
        key: 'container_group_name',
        value: containerGroupName,
      })
      .addPathParam({
        key: 'container_group_instance_id',
        value: containerGroupInstanceId,
      })
      .build();
    return this.client.call<void>(request);
  }

  /**
   * Stops a container and restarts it on the same Salad Node
   * @param {string} organizationName - Your organization name. This identifies the billing context for the API operation and represents a security boundary for SaladCloud resources. The organization must be created before using the API, and you must be a member of the organization.
   * @param {string} projectName - Your project name. This represents a collection of related SaladCloud resources. The project must be created before using the API.
   * @param {string} containerGroupName - The unique container group name
   * @param {string} containerGroupInstanceId - The unique instance identifier
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} Accepted
   */
  async restartContainerGroupInstance(
    organizationName: string,
    projectName: string,
    containerGroupName: string,
    containerGroupInstanceId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath(
        '/organizations/{organization_name}/projects/{project_name}/containers/{container_group_name}/instances/{container_group_instance_id}/restart',
      )
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
        key: 'container_group_name',
        value: containerGroupName,
      })
      .addPathParam({
        key: 'container_group_instance_id',
        value: containerGroupInstanceId,
      })
      .build();
    return this.client.call<void>(request);
  }
}
