const path = require('path');

module.exports = ({ platform }, { module, resolve }) => ({
  entry: ['./src/index.ts'],
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
