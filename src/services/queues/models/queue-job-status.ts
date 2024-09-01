import { z } from 'zod';

export enum QueueJobStatus {
  PENDING = 'pending',
  RUNNING = 'running',
  SUCCEEDED = 'succeeded',
  CANCELLED = 'cancelled',
  FAILED = 'failed',
}
