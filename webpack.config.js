const path = require('path');

const config = {
  entry: {
    'wonder-engine': './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: `typeof self !== 'undefined' ? self : this`,
  },
  module: {
    rules: [
      { test: /\.[jt]sx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  stats: {
    children: false,
  },
  externals: [
    {
      react: 'react',
      'react-dom': 'react-dom',
      'styled-components': 'styled-components',
    },
  ],
  mode: process.env.NODE_ENV,
};

module.exports = config;
