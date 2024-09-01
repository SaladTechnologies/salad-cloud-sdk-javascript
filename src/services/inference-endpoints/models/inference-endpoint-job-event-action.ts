import { z } from 'zod';

export enum InferenceEndpointJobEventAction {
  CREATED = 'created',
  STARTED = 'started',
  SUCCEEDED = 'succeeded',
  CANCELLED = 'cancelled',
  FAILED = 'failed',
}
