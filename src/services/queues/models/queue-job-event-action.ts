import { z } from 'zod';

export enum QueueJobEventAction {
  CREATED = 'created',
  STARTED = 'started',
  SUCCEEDED = 'succeeded',
  CANCELLED = 'cancelled',
  FAILED = 'failed',
}
