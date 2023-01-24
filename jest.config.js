/** @returns {Promise<import('jest').Config>} */
module.exports = async () => ({
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/JestConfig/svgTransform.js",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/setupTests.ts"],
})
