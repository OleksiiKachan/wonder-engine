module.exports = {
  verbose: true,
  testEnvironment: `jsdom`,
  transform: {
    '\\.[jt]sx?$': ['babel-jest', { configFile: './.babelrc' }],
  },
  setupFiles: [`<rootDir>/tests/setup.js`],
  snapshotSerializers: [`enzyme-to-json/serializer`],
};
