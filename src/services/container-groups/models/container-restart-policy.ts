import { z } from 'zod';

export enum ContainerRestartPolicy {
  ALWAYS = 'always',
  ON_FAILURE = 'on_failure',
  NEVER = 'never',
}
