import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const queueAutoscaler = z.lazy(() => {
  return z.object({
    minReplicas: z.number().gte(0).lte(100),
    maxReplicas: z.number().gte(1).lte(250),
    desiredQueueLength: z.number().gte(1).lte(100),
    pollingPeriod: z.number().gte(15).lte(1800).optional(),
    maxUpscalePerMinute: z.number().gte(1).lte(100).optional(),
    maxDownscalePerMinute: z.number().gte(1).lte(100).optional(),
  });
});

/**
 * Represents the autoscaling rules for a queue
 * @typedef  {QueueAutoscaler} queueAutoscaler - Represents the autoscaling rules for a queue - Represents the autoscaling rules for a queue
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type QueueAutoscaler = z.infer<typeof queueAutoscaler>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const queueAutoscalerResponse = z.lazy(() => {
  return z
    .object({
      min_replicas: z.number().gte(0).lte(100),
      max_replicas: z.number().gte(1).lte(250),
      desired_queue_length: z.number().gte(1).lte(100),
      polling_period: z.number().gte(15).lte(1800).optional(),
      max_upscale_per_minute: z.number().gte(1).lte(100).optional(),
      max_downscale_per_minute: z.number().gte(1).lte(100).optional(),
    })
    .transform((data) => ({
      minReplicas: data['min_replicas'],
      maxReplicas: data['max_replicas'],
      desiredQueueLength: data['desired_queue_length'],
      pollingPeriod: data['polling_period'],
      maxUpscalePerMinute: data['max_upscale_per_minute'],
      maxDownscalePerMinute: data['max_downscale_per_minute'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const queueAutoscalerRequest = z.lazy(() => {
  return z
    .object({
      minReplicas: z.number().nullish(),
      maxReplicas: z.number().nullish(),
      desiredQueueLength: z.number().nullish(),
      pollingPeriod: z.number().nullish(),
      maxUpscalePerMinute: z.number().nullish(),
      maxDownscalePerMinute: z.number().nullish(),
    })
    .transform((data) => ({
      min_replicas: data['minReplicas'],
      max_replicas: data['maxReplicas'],
      desired_queue_length: data['desiredQueueLength'],
      polling_period: data['pollingPeriod'],
      max_upscale_per_minute: data['maxUpscalePerMinute'],
      max_downscale_per_minute: data['maxDownscalePerMinute'],
    }));
});
