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
    "@babel/preset-react",
  ],
};

export default config;
