import { z } from 'zod';

export enum TheContainerGroupInstanceState {
  ALLOCATING = 'allocating',
  DOWNLOADING = 'downloading',
  CREATING = 'creating',
  RUNNING = 'running',
  STOPPING = 'stopping',
}
