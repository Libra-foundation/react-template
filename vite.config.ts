import {defineConfig, loadEnv} from "vite";

export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    build: {
      outDir: "build",
    },
    server: {
      port: 3000,
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
});
