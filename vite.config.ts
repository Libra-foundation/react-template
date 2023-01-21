import {defineConfig, loadEnv} from "vite";
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), "");

  const envWithProcessPrefix = {
    "process.env": `${JSON.stringify(env)}`,
  };

  return {
    plugins: [EnvironmentPlugin("all")],
    build: {
      outDir: "build",
    },
    server: {
      port: 3000,
    },
    define: envWithProcessPrefix,
  };
});
