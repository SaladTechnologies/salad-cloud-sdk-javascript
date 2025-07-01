import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';

export type IProblemDetailsSchema = {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  instance?: string;
};

export const problemDetailsResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().min(1).max(2048).optional(),
      title: z.string().min(1).max(2000).optional(),
      status: z.number().gte(100).lte(599).optional(),
      detail: z.string().min(1).max(2000).optional(),
      instance: z.string().min(1).max(2048).optional(),
    })
    .transform((data) => ({
      type: data['type'],
      title: data['title'],
      status: data['status'],
      detail: data['detail'],
      instance: data['instance'],
    }));
});

export class ProblemDetails extends ThrowableError {
  public type?: string;
  public title?: string;
  public status?: number;
  public detail?: string;
  public instance?: string;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = problemDetailsResponse.parse(response);

    this.type = parsedResponse.type;
    this.title = parsedResponse.title;
    this.status = parsedResponse.status;
    this.detail = parsedResponse.detail;
    this.instance = parsedResponse.instance;
  }

  public throw() {
    throw new ProblemDetails(this.message, this.response);
  }
}
