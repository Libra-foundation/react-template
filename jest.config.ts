import type {Config} from "jest";

const config: Config = {
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)?$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./src/setupTests.ts"],
};

export default config;
