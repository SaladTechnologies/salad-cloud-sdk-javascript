import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const queueBasedAutoscalerConfiguration = z.lazy(() => {
  return z.object({
    desiredQueueLength: z.number().gte(1).lte(100),
    maxReplicas: z.number().gte(1).lte(500),
    maxDownscalePerMinute: z.number().gte(1).lte(100).optional(),
    maxUpscalePerMinute: z.number().gte(1).lte(100).optional(),
    minReplicas: z.number().gte(0).lte(100),
    pollingPeriod: z.number().gte(15).lte(1800).optional(),
  });
});

/**
 * Defines configuration for automatically scaling container instances based on queue length. The autoscaler monitors a queue and adjusts the number of running replicas to maintain the desired queue length.
 * @typedef  {QueueBasedAutoscalerConfiguration} queueBasedAutoscalerConfiguration - Defines configuration for automatically scaling container instances based on queue length. The autoscaler monitors a queue and adjusts the number of running replicas to maintain the desired queue length. - Defines configuration for automatically scaling container instances based on queue length. The autoscaler monitors a queue and adjusts the number of running replicas to maintain the desired queue length.
 * @property {number} - The target number of items in the queue that the autoscaler attempts to maintain by scaling the containers up or down
 * @property {number} - The maximum number of instances the container can scale up to
 * @property {number} - The maximum number of instances that can be removed per minute to prevent rapid downscaling
 * @property {number} - The maximum number of instances that can be added per minute to prevent rapid upscaling
 * @property {number} - The minimum number of instances the container can scale down to, ensuring baseline availability
 * @property {number} - The period (in seconds) in which the autoscaler checks the queue length and applies the scaling formula
 */
export type QueueBasedAutoscalerConfiguration = z.infer<typeof queueBasedAutoscalerConfiguration>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const queueBasedAutoscalerConfigurationResponse = z.lazy(() => {
  return z
    .object({
      desired_queue_length: z.number().gte(1).lte(100),
      max_replicas: z.number().gte(1).lte(500),
      max_downscale_per_minute: z.number().gte(1).lte(100).optional(),
      max_upscale_per_minute: z.number().gte(1).lte(100).optional(),
      min_replicas: z.number().gte(0).lte(100),
      polling_period: z.number().gte(15).lte(1800).optional(),
    })
    .transform((data) => ({
      desiredQueueLength: data['desired_queue_length'],
      maxReplicas: data['max_replicas'],
      maxDownscalePerMinute: data['max_downscale_per_minute'],
      maxUpscalePerMinute: data['max_upscale_per_minute'],
      minReplicas: data['min_replicas'],
      pollingPeriod: data['polling_period'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const queueBasedAutoscalerConfigurationRequest = z.lazy(() => {
  return z
    .object({
      desiredQueueLength: z.number().gte(1).lte(100),
      maxReplicas: z.number().gte(1).lte(500),
      maxDownscalePerMinute: z.number().gte(1).lte(100).optional(),
      maxUpscalePerMinute: z.number().gte(1).lte(100).optional(),
      minReplicas: z.number().gte(0).lte(100),
      pollingPeriod: z.number().gte(15).lte(1800).optional(),
    })
    .transform((data) => ({
      desired_queue_length: data['desiredQueueLength'],
      max_replicas: data['maxReplicas'],
      max_downscale_per_minute: data['maxDownscalePerMinute'],
      max_upscale_per_minute: data['maxUpscalePerMinute'],
      min_replicas: data['minReplicas'],
      polling_period: data['pollingPeriod'],
    }));
});
