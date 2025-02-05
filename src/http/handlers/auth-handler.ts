import { Request } from '../transport/request';
import { HttpResponse, RequestHandler } from '../types';
import { SerializationStyle } from '../serialization/base-serializer';

export class AuthHandler implements RequestHandler {
  next?: RequestHandler;

  public async handle<T>(request: Request): Promise<HttpResponse<T>> {
    const requestWithAuth = this.addApiKeyHeader(request);

    if (!this.next) {
      throw new Error(`No next handler set in ${AuthHandler.name}`);
    }

    return this.next.handle<T>(requestWithAuth);
  }

  public async *stream<T>(request: Request): AsyncGenerator<HttpResponse<T>> {
    const requestWithAuth = this.addApiKeyHeader(request);

    if (!this.next) {
      throw new Error(`No next handler set in ${AuthHandler.name}`);
    }

    yield* this.next.stream<T>(requestWithAuth);
  }

  private addApiKeyHeader(request: Request): Request {
    const apiKey = request.config?.apiKey;
    const apiKeyHeader = request.config?.apiKeyHeader ?? 'Salad-Api-Key';
    if (!apiKey) {
      return request;
    }

    request.addHeaderParam(apiKeyHeader, {
      key: apiKeyHeader,
      value: apiKey,
      explode: false,
      encode: false,
      style: SerializationStyle.SIMPLE,
      isLimit: false,
      isOffset: false,
    });

    return request;
  }
}
