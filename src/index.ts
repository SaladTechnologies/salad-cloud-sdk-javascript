import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { ContainerGroupsService } from './services/container-groups';
import { WorkloadErrorsService } from './services/workload-errors';
import { QueuesService } from './services/queues';
import { QuotasService } from './services/quotas';
import { InferenceEndpointsService } from './services/inference-endpoints';
import { OrganizationDataService } from './services/organization-data';
import { WebhookSecretKeyService } from './services/webhook-secret-key';

export * from './services/container-groups';
export * from './services/workload-errors';
export * from './services/queues';
export * from './services/quotas';
export * from './services/inference-endpoints';
export * from './services/organization-data';
export * from './services/webhook-secret-key';

export type * from './http';

export class SaladCloudSdk {
  public readonly containerGroups: ContainerGroupsService;

  public readonly workloadErrors: WorkloadErrorsService;

  public readonly queues: QueuesService;

  public readonly quotas: QuotasService;

  public readonly inferenceEndpoints: InferenceEndpointsService;

  public readonly organizationData: OrganizationDataService;

  public readonly webhookSecretKey: WebhookSecretKeyService;

  constructor(public config: SdkConfig) {
    const baseUrl = config.environment || config.baseUrl || Environment.DEFAULT;
    this.config = {
      ...config,
      baseUrl,
    };
    this.containerGroups = new ContainerGroupsService(this.config);

    this.workloadErrors = new WorkloadErrorsService(this.config);

    this.queues = new QueuesService(this.config);

    this.quotas = new QuotasService(this.config);

    this.inferenceEndpoints = new InferenceEndpointsService(this.config);

    this.organizationData = new OrganizationDataService(this.config);

    this.webhookSecretKey = new WebhookSecretKeyService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.containerGroups.baseUrl = baseUrl;
    this.workloadErrors.baseUrl = baseUrl;
    this.queues.baseUrl = baseUrl;
    this.quotas.baseUrl = baseUrl;
    this.inferenceEndpoints.baseUrl = baseUrl;
    this.organizationData.baseUrl = baseUrl;
    this.webhookSecretKey.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.containerGroups.baseUrl = environment;
    this.workloadErrors.baseUrl = environment;
    this.queues.baseUrl = environment;
    this.quotas.baseUrl = environment;
    this.inferenceEndpoints.baseUrl = environment;
    this.organizationData.baseUrl = environment;
    this.webhookSecretKey.baseUrl = environment;
  }

  set timeout(timeout: number) {
    this.containerGroups.timeout = timeout;
    this.workloadErrors.timeout = timeout;
    this.queues.timeout = timeout;
    this.quotas.timeout = timeout;
    this.inferenceEndpoints.timeout = timeout;
    this.organizationData.timeout = timeout;
    this.webhookSecretKey.timeout = timeout;
  }

  set apiKey(apiKey: string) {
    this.containerGroups.apiKey = apiKey;
    this.workloadErrors.apiKey = apiKey;
    this.queues.apiKey = apiKey;
    this.quotas.apiKey = apiKey;
    this.inferenceEndpoints.apiKey = apiKey;
    this.organizationData.apiKey = apiKey;
    this.webhookSecretKey.apiKey = apiKey;
  }

  set apiKeyHeader(apiKeyHeader: string) {
    this.containerGroups.apiKeyHeader = apiKeyHeader;
    this.workloadErrors.apiKeyHeader = apiKeyHeader;
    this.queues.apiKeyHeader = apiKeyHeader;
    this.quotas.apiKeyHeader = apiKeyHeader;
    this.inferenceEndpoints.apiKeyHeader = apiKeyHeader;
    this.organizationData.apiKeyHeader = apiKeyHeader;
    this.webhookSecretKey.apiKeyHeader = apiKeyHeader;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
