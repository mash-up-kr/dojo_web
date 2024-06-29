/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENABLED_MOCKING?: "true";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
