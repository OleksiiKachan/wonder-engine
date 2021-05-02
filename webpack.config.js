const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'wonder-engine.js',
    library: 'wonder-engine',
    library: {
      name: 'wonder-engine',
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  externals: {
    react: 'react',
    reactDOM: 'react-dom',
    'styled-components': 'styled-components',
  },
  mode: process.env.NODE_ENV,
};
