import {defineConfig, loadEnv} from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, __dirname + "/env", "");

  const envWithProcessPrefix = {
    "process.env": `${JSON.stringify(env)}`,
  };

  return {
    plugins: [react(), svgr(), EnvironmentPlugin("all")],
    build: {
      outDir: "build",
    },
    server: {
      port: 3000,
    },
    define: envWithProcessPrefix,
  };
});
