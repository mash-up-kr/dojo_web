/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_ENABLED_MOCKING?: "true";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
