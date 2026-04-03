import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';

export type IProblemDetailsSchema = {
  detail?: string;
  instance?: string;
  status?: number;
  title?: string;
  type?: string;
};

export const problemDetailsResponse = z.lazy(() => {
  return z
    .object({
      detail: z.string().min(1).max(2000).optional(),
      instance: z.string().min(1).max(2048).optional(),
      status: z.number().gte(100).lte(599).optional(),
      title: z.string().min(1).max(2000).optional(),
      type: z.string().min(1).max(2048).optional(),
    })
    .transform((data) => ({
      detail: data['detail'],
      instance: data['instance'],
      status: data['status'],
      title: data['title'],
      type: data['type'],
    }));
});

export class ProblemDetails extends ThrowableError {
  public detail?: string;
  public instance?: string;
  public status?: number;
  public title?: string;
  public type?: string;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = problemDetailsResponse.parse(response);

    this.detail = parsedResponse.detail;
    this.instance = parsedResponse.instance;
    this.status = parsedResponse.status;
    this.title = parsedResponse.title;
    this.type = parsedResponse.type;
  }

  public throw() {
    throw new ProblemDetails(this.message, this.response);
  }
}
