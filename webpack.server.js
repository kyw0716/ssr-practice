const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './src/server.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'server'),
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
      },
    ],
  },

  externals: [nodeExternals()],
};
