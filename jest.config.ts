import type {Config} from "jest";

const config: Config = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)?$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node",
  testEnvironmentOptions: {
    node: {
      ecmaVersion: "2022",
      module: "esnext",
    },
  },
};

export default config;
