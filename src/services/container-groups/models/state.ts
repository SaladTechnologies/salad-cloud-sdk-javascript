import { z } from 'zod';

export enum State {
  ALLOCATING = 'allocating',
  DOWNLOADING = 'downloading',
  CREATING = 'creating',
  RUNNING = 'running',
  STOPPING = 'stopping',
}
