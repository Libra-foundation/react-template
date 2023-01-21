import type {Config} from "jest";

const config: Config = {
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  testEnvironment: "node",
  testEnvironmentOptions: {
    node: {
      ecmaVersion: "2022",
      module: "esnext",
    },
  },
};

export default config;
