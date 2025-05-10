import { z } from 'zod';

export enum ContainerGroupStatus {
  PENDING = 'pending',
  RUNNING = 'running',
  STOPPED = 'stopped',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
  DEPLOYING = 'deploying',
}
