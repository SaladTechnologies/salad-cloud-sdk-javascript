import { z } from 'zod';
import { QueueJobEvent, queueJobEvent, queueJobEventRequest, queueJobEventResponse } from './queue-job-event';

/**
 * Zod schema for the QueueJob model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const queueJob = z.lazy(() => {
  return z.object({
    createTime: z.string(),
    events: z.array(queueJobEvent).max(1000),
    id: z.string(),
    input: z.any(),
    metadata: z.any().optional(),
    output: z.any().optional(),
    status: z.string(),
    updateTime: z.string(),
    webhook: z
      .string()
      .min(20)
      .max(27)
      .regex(/^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(Z|[+-]\\d{2}:\\d{2})$/)
      .optional(),
  });
});

/**
 * Represents a queue job
 * @typedef  {QueueJob} queueJob - Represents a queue job - Represents a queue job
 * @property {string} - The job creation time
 * @property {QueueJobEvent[]} - The job events
 * @property {string} - The job identifier
 * @property {any} - The job input. May be any valid JSON.
 * @property {any} - Additional metadata for the job
 * @property {any} - The job output. May be any valid JSON.
 * @property {QueueJobStatus} - The job status
 * @property {string} - The job update time
 * @property {string} - The webhook URL to notify when the job completes
 */
export type QueueJob = z.infer<typeof queueJob>;

/**
 * Zod schema for mapping API responses to the QueueJob application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const queueJobResponse = z.lazy(() => {
  return z
    .object({
      create_time: z.string(),
      events: z.array(queueJobEventResponse).max(1000),
      id: z.string(),
      input: z.any(),
      metadata: z.any().optional(),
      output: z.any().optional(),
      status: z.string(),
      update_time: z.string(),
      webhook: z
        .string()
        .min(20)
        .max(27)
        .regex(/^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(Z|[+-]\\d{2}:\\d{2})$/)
        .optional(),
    })
    .transform((data) => ({
      createTime: data['create_time'],
      events: data['events'],
      id: data['id'],
      input: data['input'],
      metadata: data['metadata'],
      output: data['output'],
      status: data['status'],
      updateTime: data['update_time'],
      webhook: data['webhook'],
    }));
});

/**
 * Zod schema for mapping the QueueJob application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const queueJobRequest = z.lazy(() => {
  return z
    .object({
      createTime: z.string(),
      events: z.array(queueJobEventRequest).max(1000),
      id: z.string(),
      input: z.any(),
      metadata: z.any().optional(),
      output: z.any().optional(),
      status: z.string(),
      updateTime: z.string(),
      webhook: z
        .string()
        .min(20)
        .max(27)
        .regex(/^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(Z|[+-]\\d{2}:\\d{2})$/)
        .optional(),
    })
    .transform((data) => ({
      create_time: data['createTime'],
      events: data['events'],
      id: data['id'],
      input: data['input'],
      metadata: data['metadata'],
      output: data['output'],
      status: data['status'],
      update_time: data['updateTime'],
      webhook: data['webhook'],
    }));
});
