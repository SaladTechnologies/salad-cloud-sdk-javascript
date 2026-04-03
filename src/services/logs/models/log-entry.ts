import { z } from 'zod';
import {
  LogEntryResource,
  logEntryResource,
  logEntryResourceRequest,
  logEntryResourceResponse,
} from './log-entry-resource';

/**
 * Zod schema for the LogEntry model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const logEntry = z.lazy(() => {
  return z.object({
    jsonLog: z.any().optional(),
    parentSpanId: z.string().min(1).max(1000).optional(),
    receiveTime: z.string(),
    resource: logEntryResource,
    severity: z.string(),
    spanId: z.string().min(1).max(1000).optional(),
    textLog: z.string().max(10000).optional(),
    time: z.string(),
    traceId: z.string().min(1).max(1000).optional(),
  });
});

/**
 *
 * @typedef  {LogEntry} logEntry
 * @property {any} - The log message in JSON format.
 * @property {string} - The parent span ID of the log entry
 * @property {string} - The time when the log entry was received
 * @property {LogEntryResource} - The resource associated with the log entry
 * @property {LogEntrySeverity} - The severity level of the log entry
 * @property {string} - The span ID of the log entry
 * @property {string} - The log message in text format.
 * @property {string} - The timestamp of the log entry
 * @property {string} - The trace ID of the log entry
 */
export type LogEntry = z.infer<typeof logEntry>;

/**
 * Zod schema for mapping API responses to the LogEntry application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const logEntryResponse = z.lazy(() => {
  return z
    .object({
      json_log: z.any().optional(),
      parent_span_id: z.string().min(1).max(1000).optional(),
      receive_time: z.string(),
      resource: logEntryResourceResponse,
      severity: z.string(),
      span_Id: z.string().min(1).max(1000).optional(),
      text_log: z.string().max(10000).optional(),
      time: z.string(),
      trace_Id: z.string().min(1).max(1000).optional(),
    })
    .transform((data) => ({
      jsonLog: data['json_log'],
      parentSpanId: data['parent_span_id'],
      receiveTime: data['receive_time'],
      resource: data['resource'],
      severity: data['severity'],
      spanId: data['span_Id'],
      textLog: data['text_log'],
      time: data['time'],
      traceId: data['trace_Id'],
    }));
});

/**
 * Zod schema for mapping the LogEntry application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const logEntryRequest = z.lazy(() => {
  return z
    .object({
      jsonLog: z.any().optional(),
      parentSpanId: z.string().min(1).max(1000).optional(),
      receiveTime: z.string(),
      resource: logEntryResourceRequest,
      severity: z.string(),
      spanId: z.string().min(1).max(1000).optional(),
      textLog: z.string().max(10000).optional(),
      time: z.string(),
      traceId: z.string().min(1).max(1000).optional(),
    })
    .transform((data) => ({
      json_log: data['jsonLog'],
      parent_span_id: data['parentSpanId'],
      receive_time: data['receiveTime'],
      resource: data['resource'],
      severity: data['severity'],
      span_Id: data['spanId'],
      text_log: data['textLog'],
      time: data['time'],
      trace_Id: data['traceId'],
    }));
});
