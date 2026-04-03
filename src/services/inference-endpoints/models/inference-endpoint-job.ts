import { z } from 'zod';
import {
  InferenceEndpointJobEvent,
  inferenceEndpointJobEvent,
  inferenceEndpointJobEventRequest,
  inferenceEndpointJobEventResponse,
} from './inference-endpoint-job-event';

/**
 * Zod schema for the InferenceEndpointJob model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const inferenceEndpointJob = z.lazy(() => {
  return z.object({
    createTime: z.string(),
    events: z.array(inferenceEndpointJobEvent).max(1000),
    id: z.string(),
    inferenceEndpointName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    input: z.any(),
    metadata: z.any().optional(),
    organizationName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    output: z.any().optional(),
    status: z.string(),
    updateTime: z.string(),
    webhook: z.string().min(1).max(2048).optional(),
    webhookUrl: z.string().min(1).max(2048).optional(),
  });
});

/**
 * Represents a inference endpoint job
 * @typedef  {InferenceEndpointJob} inferenceEndpointJob - Represents a inference endpoint job - Represents a inference endpoint job
 * @property {string} - The time the job was created.
 * @property {InferenceEndpointJobEvent[]} - The list of events.
 * @property {string} - The inference endpoint job identifier.
 * @property {string} - The inference endpoint name.
 * @property {any} - The job input. May be any valid JSON.
 * @property {any} - The job metadata. May be any valid JSON.
 * @property {string} - The organization name.
 * @property {any} - The job output. May be any valid JSON.
 * @property {Status} - The current status.
 * @property {string} - The time the job was last updated.
 * @property {string} - The webhook URL called when the job completes.
 * @property {string} - The webhook URL called when the job completes.
 */
export type InferenceEndpointJob = z.infer<typeof inferenceEndpointJob>;

/**
 * Zod schema for mapping API responses to the InferenceEndpointJob application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const inferenceEndpointJobResponse = z.lazy(() => {
  return z
    .object({
      create_time: z.string(),
      events: z.array(inferenceEndpointJobEventResponse).max(1000),
      id: z.string(),
      inference_endpoint_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      input: z.any(),
      metadata: z.any().optional(),
      organization_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      output: z.any().optional(),
      status: z.string(),
      update_time: z.string(),
      webhook: z.string().min(1).max(2048).optional(),
      webhook_url: z.string().min(1).max(2048).optional(),
    })
    .transform((data) => ({
      createTime: data['create_time'],
      events: data['events'],
      id: data['id'],
      inferenceEndpointName: data['inference_endpoint_name'],
      input: data['input'],
      metadata: data['metadata'],
      organizationName: data['organization_name'],
      output: data['output'],
      status: data['status'],
      updateTime: data['update_time'],
      webhook: data['webhook'],
      webhookUrl: data['webhook_url'],
    }));
});

/**
 * Zod schema for mapping the InferenceEndpointJob application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const inferenceEndpointJobRequest = z.lazy(() => {
  return z
    .object({
      createTime: z.string(),
      events: z.array(inferenceEndpointJobEventRequest).max(1000),
      id: z.string(),
      inferenceEndpointName: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      input: z.any(),
      metadata: z.any().optional(),
      organizationName: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      output: z.any().optional(),
      status: z.string(),
      updateTime: z.string(),
      webhook: z.string().min(1).max(2048).optional(),
      webhookUrl: z.string().min(1).max(2048).optional(),
    })
    .transform((data) => ({
      create_time: data['createTime'],
      events: data['events'],
      id: data['id'],
      inference_endpoint_name: data['inferenceEndpointName'],
      input: data['input'],
      metadata: data['metadata'],
      organization_name: data['organizationName'],
      output: data['output'],
      status: data['status'],
      update_time: data['updateTime'],
      webhook: data['webhook'],
      webhook_url: data['webhookUrl'],
    }));
});
