import { z } from 'zod';
import { LogEntry, logEntry, logEntryRequest, logEntryResponse } from './log-entry';

/**
 * The shape of the model inside the application code - what the users use
 */
export const logEntryCollection = z.lazy(() => {
  return z.object({
    items: z.array(logEntry).max(10000),
    organizationName: z
      .string()
      .min(2)
      .max(63)
      .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
    pageMaxTime: z.string(),
    pageMinTime: z.string(),
  });
});

/**
 * Represents a page of organization logs
 * @typedef  {LogEntryCollection} logEntryCollection - Represents a page of organization logs - Represents a page of organization logs
 * @property {LogEntry[]} - A collection of log entries
 * @property {string} - The organization name.
 * @property {string} - The maximum time page boundary. This may be used when getting paginated results.
 * @property {string} - The minimum time page boundary. This may be used when getting paginated results.
 */
export type LogEntryCollection = z.infer<typeof logEntryCollection>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const logEntryCollectionResponse = z.lazy(() => {
  return z
    .object({
      items: z.array(logEntryResponse).max(10000),
      organization_name: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      page_max_time: z.string(),
      page_min_time: z.string(),
    })
    .transform((data) => ({
      items: data['items'],
      organizationName: data['organization_name'],
      pageMaxTime: data['page_max_time'],
      pageMinTime: data['page_min_time'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const logEntryCollectionRequest = z.lazy(() => {
  return z
    .object({
      items: z.array(logEntryRequest).max(10000),
      organizationName: z
        .string()
        .min(2)
        .max(63)
        .regex(/^[a-z][a-z0-9-]{0,61}[a-z0-9]$/),
      pageMaxTime: z.string(),
      pageMinTime: z.string(),
    })
    .transform((data) => ({
      items: data['items'],
      organization_name: data['organizationName'],
      page_max_time: data['pageMaxTime'],
      page_min_time: data['pageMinTime'],
    }));
});
