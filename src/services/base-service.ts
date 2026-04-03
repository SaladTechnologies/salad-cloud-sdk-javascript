import { Environment } from '../http/environment';
import { HttpClient } from '../http/client';
import { SdkConfig } from '../http/types';

/**
 * Base service class that all API service classes extend.
 * Provides common functionality including HTTP client management and configuration.
 */
export class BaseService {
  /** The HTTP client instance used to make API requests */
  public client: HttpClient;

  constructor(public config: SdkConfig) {
    this.client = new HttpClient(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.config.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.config.environment = environment;
  }

  set timeoutMs(timeoutMs: number) {
    this.config.timeoutMs = timeoutMs;
  }

  set apiKey(apiKey: string) {
    this.config.apiKey = apiKey;
  }

  set apiKeyHeader(apiKeyHeader: string) {
    this.config.apiKeyHeader = apiKeyHeader;
  }
}
