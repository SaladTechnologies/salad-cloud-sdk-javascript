import { z } from 'zod';
import { QueueJobEvent, queueJobEvent, queueJobEventRequest, queueJobEventResponse } from './queue-job-event';

/**
 * The shape of the model inside the application code - what the users use
 */
export const queueJob = z.lazy(() => {
  return z.object({
    id: z.string(),
    input: z.any(),
    metadata: z.any().optional(),
    webhook: z
      .string()
      .min(20)
      .max(27)
      .regex(/^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(Z|[+-]\\d{2}:\\d{2})$/)
      .optional(),
    status: z.string(),
    events: z.array(queueJobEvent).max(1000),
    output: z.any().optional(),
    createTime: z.string(),
    updateTime: z.string(),
  });
});

/**
 * Represents a queue job
 * @typedef  {QueueJob} queueJob - Represents a queue job - Represents a queue job
 * @property {string} - The job identifier
 * @property {any} - The job input. May be any valid JSON.
 * @property {any} - Additional metadata for the job
 * @property {string} - The webhook URL to notify when the job completes
 * @property {QueueJobStatus} - The job status
 * @property {QueueJobEvent[]} - The job events
 * @property {any} - The job output. May be any valid JSON.
 * @property {string} - The job creation time
 * @property {string} - The job update time
 */
export type QueueJob = z.infer<typeof queueJob>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const queueJobResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      input: z.any(),
      metadata: z.any().optional(),
      webhook: z
        .string()
        .min(20)
        .max(27)
        .regex(/^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(Z|[+-]\\d{2}:\\d{2})$/)
        .optional(),
      status: z.string(),
      events: z.array(queueJobEventResponse).max(1000),
      output: z.any().optional(),
      create_time: z.string(),
      update_time: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      input: data['input'],
      metadata: data['metadata'],
      webhook: data['webhook'],
      status: data['status'],
      events: data['events'],
      output: data['output'],
      createTime: data['create_time'],
      updateTime: data['update_time'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const queueJobRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      input: z.any(),
      metadata: z.any().optional(),
      webhook: z.string().optional(),
      status: z.string(),
      events: z.array(queueJobEventRequest),
      output: z.any().optional(),
      createTime: z.string(),
      updateTime: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      input: data['input'],
      metadata: data['metadata'],
      webhook: data['webhook'],
      status: data['status'],
      events: data['events'],
      output: data['output'],
      create_time: data['createTime'],
      update_time: data['updateTime'],
    }));
});
