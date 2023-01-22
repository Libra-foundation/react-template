/// <reference types="vite/client" />

type DictRecord<T> = Record<string, T | undefined>;

interface ProcessEnv extends DictRecord<string> {
  /**
   * Can be used to change the default timezone at runtime
   */
  TZ?: string;
}

export interface Process {
  env: ProcessEnv;
}
