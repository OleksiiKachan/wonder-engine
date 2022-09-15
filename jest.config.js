module.exports = {
  verbose: true,
  testEnvironment: `jsdom`,
  transform: {
    '\\.[jt]sx?$': ['babel-jest', { configFile: './.babelrc' }],
  },
};
