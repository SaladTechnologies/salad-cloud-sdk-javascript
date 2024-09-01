import { z } from 'zod';

export enum ContainerRestartPolicy {
  ALWAYS = 'always',
  ONFAILURE = 'on_failure',
  NEVER = 'never',
}
