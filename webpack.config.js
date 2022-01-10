// import CopyWebpackPlugin from 'copy-webpack-plugin';
const path = require(`path`);
const CleanWebpackPlugin = require(`clean-webpack-plugin`).CleanWebpackPlugin;

const plugins = [
  // new CleanWebpackPlugin(),
  // new CopyWebpackPlugin([{ from: './README.md' }, { from: './package.json' }]),
];

module.exports = {
  devtool: 'hidden-source-map',
  entry: path.resolve(__dirname, './src'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'wonder-engine.min.js',
    libraryTarget: 'var',
    library: 'wonderEngine',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: `babel-loader`,
            options: {
              babelrc: true,
            },
          },
          'ts-loader',
        ],
      },
    ],
  },
};
