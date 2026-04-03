import { z } from 'zod';
import { SystemLog, systemLog, systemLogRequest, systemLogResponse } from './system-log';

/**
 * Zod schema for the SystemLogList model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const systemLogList = z.lazy(() => {
  return z.object({
    items: z.array(systemLog).max(50),
  });
});

/**
 * Represents a list of system logs
 * @typedef  {SystemLogList} systemLogList - Represents a list of system logs - Represents a list of system logs
 * @property {SystemLog[]} - A list of system logs
 */
export type SystemLogList = z.infer<typeof systemLogList>;

/**
 * Zod schema for mapping API responses to the SystemLogList application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the SystemLogList application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const systemLogListRequest = z.lazy(() => {
  return z
    .object({
      items: z.array(systemLogRequest).max(50),
    })
    .transform((data) => ({
      items: data['items'],
    }));
});
