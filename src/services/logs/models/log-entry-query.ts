import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const logEntryQuery = z.lazy(() => {
  return z.object({
    endTime: z.string(),
    pageSize: z.number().gte(1).lte(100).optional(),
    query: z.string().max(20000),
    sortOrder: z.string().optional(),
    startTime: z.string(),
  });
});

/**
 * Represents a query for logs
 * @typedef  {LogEntryQuery} logEntryQuery - Represents a query for logs - Represents a query for logs
 * @property {string} - The end time of the time range
 * @property {number} - The maximum number of items per page.
 * @property {string} - The query string for filtering logs
 * @property {LogEntryQuerySortOrder} - The sort order of the log entries. `asc` will sort the log entries in chronological order. `desc` will sort the log entries in reverse chronological order.
 * @property {string} - The start time of the time range
 */
export type LogEntryQuery = z.infer<typeof logEntryQuery>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const logEntryQueryResponse = z.lazy(() => {
  return z
    .object({
      end_time: z.string(),
      page_size: z.number().gte(1).lte(100).optional(),
      query: z.string().max(20000),
      sort_order: z.string().optional(),
      start_time: z.string(),
    })
    .transform((data) => ({
      endTime: data['end_time'],
      pageSize: data['page_size'],
      query: data['query'],
      sortOrder: data['sort_order'],
      startTime: data['start_time'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const logEntryQueryRequest = z.lazy(() => {
  return z
    .object({
      endTime: z.string(),
      pageSize: z.number().gte(1).lte(100).optional(),
      query: z.string().max(20000),
      sortOrder: z.string().optional(),
      startTime: z.string(),
    })
    .transform((data) => ({
      end_time: data['endTime'],
      page_size: data['pageSize'],
      query: data['query'],
      sort_order: data['sortOrder'],
      start_time: data['startTime'],
    }));
});
