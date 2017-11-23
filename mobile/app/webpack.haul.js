import path from 'path';

const config = ({ platform }, { module, resolve }) => ({
  entry: ['./src'],
  resolve: {
    ...resolve,
    extensions: ['.ts', '.tsx', '.json', ...resolve.extensions],
    alias: {
      '~': path.join(__dirname, '..', 'src'),
      '~e2e': path.join(__dirname, '..', 'e2e'),
      '~tests': path.join(__dirname, '..', 'tests'),
    },
    modules: [path.resolve('./src'), path.resolve('./node_modules'), 'node_modules'],
  },
  module: {
    ...module,
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        exclude: /node_modules/,
      },
      ...module.rules,
    ],
  },
});

module.exports = config;
