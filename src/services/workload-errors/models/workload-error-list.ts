import { z } from 'zod';
import { workloadError, workloadErrorRequest, workloadErrorResponse } from './workload-error';

/**
 * The shape of the model inside the application code - what the users use
 */
export const workloadErrorList = z.lazy(() => {
  return z.object({
    items: z.array(workloadError).max(50),
  });
});

/**
 * Represents a list of workload errors
 * @typedef  {WorkloadErrorList} workloadErrorList - Represents a list of workload errors - Represents a list of workload errors
 * @property {WorkloadError[]}
 */
export type WorkloadErrorList = z.infer<typeof workloadErrorList>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const workloadErrorListResponse = z.lazy(() => {
  return z
    .object({
      items: z.array(workloadErrorResponse).max(50),
    })
    .transform((data) => ({
      items: data['items'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const workloadErrorListRequest = z.lazy(() => {
  return z.object({ items: z.array(workloadErrorRequest).nullish() }).transform((data) => ({
    items: data['items'],
  }));
});
