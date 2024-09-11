import { Request } from '../transport/request';
import { HttpResponse, RequestHandler } from '../types';
import { SerializationStyle } from '../serialization/base-serializer';

export class AuthHandler implements RequestHandler {
  next?: RequestHandler;

  async handle<T>(request: Request<T>): Promise<HttpResponse<T>> {
    const requestWithAuth = this.addApiKeyHeader(request);

    if (!this.next) {
      throw new Error(`No next handler set in ${AuthHandler.name}`);
    }

    return this.next?.handle(requestWithAuth);
  }

  private addApiKeyHeader<T>(request: Request<T>): Request<T> {
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
