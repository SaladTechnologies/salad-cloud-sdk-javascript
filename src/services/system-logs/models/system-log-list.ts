import { z } from 'zod';
import { systemLog, systemLogRequest, systemLogResponse } from './system-log';

/**
 * The shape of the model inside the application code - what the users use
 */
export const systemLogList = z.lazy(() => {
  return z.object({
    items: z.array(systemLog).max(50),
  });
});

/**
 * Represents a list of system logs
 * @typedef  {SystemLogList} systemLogList - Represents a list of system logs - Represents a list of system logs
 * @property {SystemLog[]}
 */
export type SystemLogList = z.infer<typeof systemLogList>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const systemLogListResponse = z.lazy(() => {
  return z
    .object({
      items: z.array(systemLogResponse).max(50),
    })
    .transform((data) => ({
      items: data['items'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const systemLogListRequest = z.lazy(() => {
  return z.object({ items: z.array(systemLogRequest).nullish() }).transform((data) => ({
    items: data['items'],
  }));
});
