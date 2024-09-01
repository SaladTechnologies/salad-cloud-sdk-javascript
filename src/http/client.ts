import { SerializationStyle } from './serialization/base-serializer';
import { HttpMethod, HttpResponse, Options, RetryOptions, SdkConfig } from './types';
import { RequestHandlerChain } from './handlers/handler-chain';
import { HookHandler } from './handlers/hook-handler';
import { ResponseValidationHandler } from './handlers/response-validation-handler';
import { RequestValidationHandler } from './handlers/request-validation-handler';
import { CustomHook } from './hooks/custom-hook';
import { TerminatingHandler } from './handlers/terminating-handler';
import { RetryHandler } from './handlers/retry-handler';
import { Request } from './transport/request';
import { AuthHandler } from './handlers/auth-handler';

export class HttpClient {
  private readonly requestHandlerChain = new RequestHandlerChain();

  constructor(
    private config: SdkConfig,
    hook = new CustomHook(),
  ) {
    this.requestHandlerChain.addHandler(new ResponseValidationHandler());
    this.requestHandlerChain.addHandler(new RequestValidationHandler());
    this.requestHandlerChain.addHandler(new AuthHandler());
    this.requestHandlerChain.addHandler(new RetryHandler());
    this.requestHandlerChain.addHandler(new HookHandler(hook));
    this.requestHandlerChain.addHandler(new TerminatingHandler());
  }

  call<T>(request: Request<T>): Promise<HttpResponse<T>> {
    return this.requestHandlerChain.callChain(request);
  }

  setBaseUrl(url: string): void {
    this.config.baseUrl = url;
  }

  setConfig(config: SdkConfig): void {
    this.config = config;
  }
}
