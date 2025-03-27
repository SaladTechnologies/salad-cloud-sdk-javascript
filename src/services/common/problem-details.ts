import { z } from 'zod';

type IProblemDetailsSchema = {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  instance?: string;
};

const problemDetailsResponse: z.ZodType<IProblemDetailsSchema> = z.lazy(() => {
  return z.object({
    type: z
      .string()
      .min(1)
      .max(2000)
      .regex(/^(?:[a-zA-Z][a-zA-Z0-9+.-]*:)?(?:\/{0,2}[^\s\/?#]+)?(?:\/[^\s?#]*)?(?:\?[^\s#]*)?(?:#\S*)?$/)
      .optional(),
    title: z
      .string()
      .min(1)
      .max(200)
      .regex(/^[\P{C}]+$/)
      .optional(),
    status: z.number().gte(100).lte(599).optional(),
    detail: z
      .string()
      .min(1)
      .max(1000)
      .regex(/^[\P{C}]+$/)
      .optional(),
    instance: z
      .string()
      .min(1)
      .max(2000)
      .regex(/^(?:[a-zA-Z][a-zA-Z0-9+.-]*:)?(?:\/{0,2}[^\s\/?#]+)?(?:\/[^\s?#]*)?(?:\?[^\s#]*)?(?:#\S*)?$/)
      .optional(),
  });
}) as z.ZodType<IProblemDetailsSchema>;

export class ProblemDetails extends Error {
  public type?: string;
  public title?: string;
  public status?: number;
  public detail?: string;
  public instance?: string;
  constructor(message?: string, response?: unknown) {
    super(message);

    const parsedResponse = problemDetailsResponse.parse(response);

    this.type = parsedResponse.type;
    this.title = parsedResponse.title;
    this.status = parsedResponse.status;
    this.detail = parsedResponse.detail;
    this.instance = parsedResponse.instance;
  }
}
