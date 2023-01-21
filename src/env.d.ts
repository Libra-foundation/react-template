/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TITLE: string;
  // more env variables...
}

interface ImportMeta {
  // eslint-disable-next-line @typescript-eslint/naming-convention -- Vite standard naming
  readonly env: ImportMetaEnv;
}
