const config = {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-modules",
      {
        loose: true,
        allowTopLevelThis: true,
      },
    ],
  ],
};

export default config;
