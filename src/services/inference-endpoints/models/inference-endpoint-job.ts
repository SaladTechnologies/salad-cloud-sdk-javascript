import { z } from 'zod';
import {
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
    input: z.any(),
    inferenceEndpointName: z.string(),
    metadata: z.any().optional().nullable(),
    webhook: z.string().optional().nullable(),
    status: z.string(),
    events: z.array(inferenceEndpointJobEvent).max(1000),
    organizationName: z.string(),
    output: z.any().optional(),
    createTime: z.string(),
    updateTime: z.string(),
  });
});

/**
 * Represents a inference endpoint job
 * @typedef  {InferenceEndpointJob} inferenceEndpointJob - Represents a inference endpoint job - Represents a inference endpoint job
 * @property {string}
 * @property {any} - The job input. May be any valid JSON.
 * @property {string} - The inference endpoint name
 * @property {any}
 * @property {string}
 * @property {InferenceEndpointJobStatus}
 * @property {InferenceEndpointJobEvent[]}
 * @property {string} - The organization name
 * @property {any} - The job output. May be any valid JSON.
 * @property {string}
 * @property {string}
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
      input: z.any(),
      inference_endpoint_name: z.string(),
      metadata: z.any().optional().nullable(),
      webhook: z.string().optional().nullable(),
      status: z.string(),
      events: z.array(inferenceEndpointJobEventResponse).max(1000),
      organization_name: z.string(),
      output: z.any().optional(),
      create_time: z.string(),
      update_time: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      input: data['input'],
      inferenceEndpointName: data['inference_endpoint_name'],
      metadata: data['metadata'],
      webhook: data['webhook'],
      status: data['status'],
      events: data['events'],
      organizationName: data['organization_name'],
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
      id: z.string().nullish(),
      input: z.any().nullish(),
      inferenceEndpointName: z.string().nullish(),
      metadata: z.any().nullish(),
      webhook: z.string().nullish(),
      status: z.string().nullish(),
      events: z.array(inferenceEndpointJobEventRequest).nullish(),
      organizationName: z.string().nullish(),
      output: z.any().nullish(),
      createTime: z.string().nullish(),
      updateTime: z.string().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      input: data['input'],
      inference_endpoint_name: data['inferenceEndpointName'],
      metadata: data['metadata'],
      webhook: data['webhook'],
      status: data['status'],
      events: data['events'],
      organization_name: data['organizationName'],
      output: data['output'],
      create_time: data['createTime'],
      update_time: data['updateTime'],
    }));
});
