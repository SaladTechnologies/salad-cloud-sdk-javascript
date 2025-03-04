import { z } from 'zod';

export enum Action {
  CREATED = 'created',
  STARTED = 'started',
  SUCCEEDED = 'succeeded',
  CANCELLED = 'cancelled',
  FAILED = 'failed',
}
