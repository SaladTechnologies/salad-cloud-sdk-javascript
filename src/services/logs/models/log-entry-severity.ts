import { z } from 'zod';

export enum LogEntrySeverity {
  DEFAULT_ = 'default',
  DEBUG = 'debug',
  INFO = 'info',
  NOTICE = 'notice',
  WARNING = 'warning',
  ERROR = 'error',
  CRITICAL = 'critical',
  ALERT = 'alert',
  EMERGENCY = 'emergency',
}
