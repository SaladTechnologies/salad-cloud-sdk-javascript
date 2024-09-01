import { HttpError } from '../error';
import { Request } from '../transport/request';
import { HttpResponse, RequestHandler } from '../types';
import { RequestFetchAdapter } from '../transport/request-fetch-adapter';

export class TerminatingHandler implements RequestHandler {
  async handle<T>(request: Request<T>): Promise<HttpResponse<T>> {
    return new RequestFetchAdapter(request).send();
  }
}
