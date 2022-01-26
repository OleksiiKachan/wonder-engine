module.exports = {
  verbose: true,
  testEnvironment: `jsdom`,
  transform: {
    '\\.[jt]sx?$': ['babel-jest', { configFile: './babel.config.js' }],
  },
  setupFiles: [`<rootDir>/tests/setup.js`],
  snapshotSerializers: [`enzyme-to-json/serializer`],
};
