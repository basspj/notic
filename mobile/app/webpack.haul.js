const path = require('path');

const pathResolve = (dir) => path.join(__dirname, '..', dir);

module.exports = ({ platform }, { module, resolve }) => ({
  entry: ['./src/index.ts'],
  resolve: {
    ...resolve,
    extensions: ['.ts', '.tsx', '.json', ...resolve.extensions],
    alias: {
      '~': pathResolve('src'),
      '~e2e': pathResolve('e2e'),
      '~tests': pathResolve('tests'),
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
