import { z } from 'zod';
import {
  InferenceEndpointJobEvent,
  inferenceEndpointJobEvent,
  inferenceEndpointJobEventRequest,
  inferenceEndpointJobEventResponse,
} from './inference-endpoint-job-event';

/**
 * The shape of the model inside the application code - what the users use
 */
export const inferenceEndpointJob = z.lazy(() => {
  return z.object({
    id: z.string(),
    inferenceEndpointName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    organizationName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    input: z.any(),
    metadata: z.any().optional(),
    webhook: z.string().min(1).max(2048).optional(),
    webhookUrl: z.string().min(1).max(2048).optional(),
    status: z.string(),
    events: z.array(inferenceEndpointJobEvent).max(1000),
    output: z.any().optional(),
    createTime: z.string(),
    updateTime: z.string(),
  });
});

/**
 * Represents a inference endpoint job
 * @typedef  {InferenceEndpointJob} inferenceEndpointJob - Represents a inference endpoint job - Represents a inference endpoint job
 * @property {string} - The inference endpoint job identifier.
 * @property {string} - The inference endpoint name.
 * @property {string} - The organization name.
 * @property {any} - The job input. May be any valid JSON.
 * @property {any} - The job metadata. May be any valid JSON.
 * @property {string} - The webhook URL called when the job completes.
 * @property {string} - The webhook URL called when the job completes.
 * @property {Status} - The current status.
 * @property {InferenceEndpointJobEvent[]} - The list of events.
 * @property {any} - The job output. May be any valid JSON.
 * @property {string} - The time the job was created.
 * @property {string} - The time the job was last updated.
 */
export type InferenceEndpointJob = z.infer<typeof inferenceEndpointJob>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const inferenceEndpointJobResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      inference_endpoint_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      organization_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      input: z.any(),
      metadata: z.any().optional(),
      webhook: z.string().min(1).max(2048).optional(),
      webhook_url: z.string().min(1).max(2048).optional(),
      status: z.string(),
      events: z.array(inferenceEndpointJobEventResponse).max(1000),
      output: z.any().optional(),
      create_time: z.string(),
      update_time: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      inferenceEndpointName: data['inference_endpoint_name'],
      organizationName: data['organization_name'],
      input: data['input'],
      metadata: data['metadata'],
      webhook: data['webhook'],
      webhookUrl: data['webhook_url'],
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
export const inferenceEndpointJobRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      inferenceEndpointName: z.string(),
      organizationName: z.string(),
      input: z.any(),
      metadata: z.any().optional(),
      webhook: z.string().optional(),
      webhookUrl: z.string().optional(),
      status: z.string(),
      events: z.array(inferenceEndpointJobEventRequest),
      output: z.any().optional(),
      createTime: z.string(),
      updateTime: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      inference_endpoint_name: data['inferenceEndpointName'],
      organization_name: data['organizationName'],
      input: data['input'],
      metadata: data['metadata'],
      webhook: data['webhook'],
      webhook_url: data['webhookUrl'],
      status: data['status'],
      events: data['events'],
      output: data['output'],
      create_time: data['createTime'],
      update_time: data['updateTime'],
    }));
});
